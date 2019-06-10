import * as bcrypt from "bcryptjs";
import { Context } from "./Utils";
import { LoginUser } from "../QueryArguments";
import {
  UserCreateInput,
  User,
  InvitationType,
  Invitation
} from "../generated/prisma-client";
import uuid from "uuid";
import { Role } from "../auth/Roles";
import * as jwt from "jsonwebtoken";
import { getUserClaims } from "../resolvers/Types/User";

async function hashPassword(password: string) {
  if (password.length < 8) {
    throw new Error("Password has to be minimum 8 characters long");
  }
  return await bcrypt.hash(password, 10);
}

async function generateToken(user: User, context: Context) {
  let token = jwt.sign(
    {
      id: user.id,
      username: user.name || user.identifier,
      claims: getUserClaims(user.id, context)
    },
    process.env.OMO_SECRET || "",
    {
      expiresIn: `${process.env.TOKEN_EXPIRES}d`
    }
  );
  return token;
}

function getUserIdentifier(invitation: Invitation) {
  switch (invitation.type) {
    case "EMAIL":
    case "PERSONALLINK":
      return invitation.email || invitation.id;
    default:
      return uuid.v4();
  }
}

async function loginUser(context: Context, user: User) {
  return {
    user,
    token: await generateToken(user, context)
  };
}

async function registerUser(
  context: Context,
  invitation: Invitation
): Promise<User> {
  let id = getUserIdentifier(invitation);
  let newUser: UserCreateInput = {
    identifier: id,
    identificationType: "LOGIN",
    wallet: { create: {} },
    name:
      invitation.name ||
      invitation.email ||
      `invited by ${await context.prisma.invitation({ id: invitation.id })
        .invitedBy.name}`,
    password: await hashPassword(id),
    roles: { connect: { name: Role.INVITED } }
  };

  let cityid = await context.prisma
    .invitation({ id: invitation.id })
    .city()
    .id();
  if (cityid) {
    newUser.city = { connect: { id: cityid } };
  }

  var user = await context.prisma.createUser(newUser);
  if (invitation.type != "GLOBALLINK") {
    await context.prisma.updateInvitation({
      data: { state: "TemporaryAccount" },
      where: { id: invitation.id }
    });
  }
  return user;
}

async function signInOrSignUpUserByInvitation(
  context: Context,
  invitationId: string
) {
  let invitation = await context.prisma.invitation({ id: invitationId });
  if (!invitation) {
    throw new Error("User couldn't created because there was no invitation");
  }
  switch (invitation.state) {
    case "Invited": {
      let user = await registerUser(context, invitation);
      return await loginUser(context, user);
    }
    case "TemporaryAccount": {
      let user = await context.prisma.user({
        identifier: getUserIdentifier(invitation)
      });
      if (user) return await loginUser(context, user);
      else {
        throw new Error("user not found");
      }
    }
    case "Finished":
      throw new Error("Invitationlink was already used");
  }
}

export { signInOrSignUpUserByInvitation };
