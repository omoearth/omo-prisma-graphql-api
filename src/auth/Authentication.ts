require("dotenv").config();
const cookieparser = require("cookieparser");
import { PublicMutations } from "../resolvers/Mutation";
import { PublicQueries } from "../resolvers/Query";
import { PublicSubcriptions } from "../resolvers/Subscription";
import { User } from "../generated/prisma-client";
import * as jwt from "jsonwebtoken";
import { Context, LoginResponse, Response } from "../definitions/Interfaces";
import { NodeMailer } from "../messaging/email/NodeMailer";
import { getUserClaims } from "../resolvers/Types/User";
import { Role } from "../auth/Roles";
import { resolveSoa } from "dns";

export class Authentication {
  private nodeMailer = new NodeMailer();

  async signInOrSignUp(context: Context, email: string): Promise<Response> {
    let user = await context.prisma.user({ identifier: email });
    if (user == null) {
      return this.registerByMail(context, email);
    }
    return this.sendLoginLink(context, user);
  }

  async registerByMail(context: Context, email: string): Promise<Response> {
    let user = await context.prisma.createUser({
      identificationType: "LOGIN",
      identifier: email
    });
    return this.sendRegisterLink(context, user);
  }

  async sendRegisterLink(context: Context, user: User): Promise<Response> {
    let emailLogin = await context.prisma.createEmailLogin({
      user: { connect: { id: user.id } }
    });
    return await this.nodeMailer.sendRegisterLink(emailLogin, user);
  }

  async loginWithMail(
    context: Context,
    emailLoginId: any
  ): Promise<LoginResponse> {
    let id = emailLoginId.emailLoginId;
    let user = await context.prisma.emailLogin({ id: id }).user();
    if (!user) throw Error("No Login found, or already used");
    if (user.registered == null) {
      await context.prisma.updateUser({
        data: {
          registered: new Date(),
          roles: { connect: { name: Role.USER } }
        },
        where: { id: user.id }
      });
    }
    await context.prisma.deleteEmailLogin({ id: id });
    return await this.getLoginResponse(user);
  }

  async sendLoginLink(context: Context, user: User) {
    let emailLogin = await context.prisma.createEmailLogin({
      user: { connect: { id: user.id } }
    });
    if (user.registered == null) {
      return await this.nodeMailer.sendRegisterLink(emailLogin, user);
    }
    return await this.nodeMailer.sendLoginLink(emailLogin, user);
  }

  private async generateToken(user: User) {
    let token = jwt.sign(
      {
        id: user.id,
        username: user.name || user.identifier
        // claims: getUserClaims(user.id, context)
      },
      process.env.OMO_SECRET || "",
      {
        expiresIn: `${process.env.TOKEN_EXPIRES}d`
      }
    );
    return token;
  }

  private async getLoginResponse(user: User): Promise<LoginResponse> {
    return {
      message: "Sucessyfully logged in",
      success: true,
      token: await this.generateToken(user),
      user: user
    };
  }
}

export const authenticateMiddleware = async (
  resolve: any,
  root: any,
  args: any,
  context: Context,
  info: any
) => {
  // GraphQL makes a "call" foreach property you query in you request. If root is not empty the call is already authorized.
  // SO you can skip logic
  if (root) return await resolve(root, args, context, info);
  let token: any;

  try {
    // try to parse authentication out of the cookie of the request.
    // if it fails the logic for  non authenicated endpoints will be applied.
    const parsed = cookieparser.parse(context.request.request.headers.cookie);
    var auth = JSON.parse(parsed.auth);
    token = jwt.verify(auth.accessToken, process.env.OMO_SECRET || "");
    //Saving the user to  the context
    context.user = await context.prisma.user({ id: token.id });
    context.claims = await getUserClaims(token.id, context);
    return await resolve(root, args, context, info);
  } catch (e) {
    let endpoint = info.fieldName;
    let operation = info.operation.operation;

    switch (operation) {
      case "query":
        if (PublicQueries.includes(endpoint)) {
          return await resolve(root, args, context, info);
        }
      case "mutation":
        console.log(endpoint);
        if (PublicMutations.includes(endpoint)) {
          return await resolve(root, args, context, info);
        }
      case "subscription":
        if (PublicSubcriptions.includes(endpoint)) {
          return await resolve(root, args, context, info);
        }
    }
    return new Error("Not authenticated, please login");
  }
};
