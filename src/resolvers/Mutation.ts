import { Context, LoginResponse, Response } from "../definitions/Interfaces";
import { Authentication } from "../auth/Authentication";

const authentication = new Authentication();

export const PublicMutations: Array<String> = [
  "loginWithMail",
  "signInOrSignUp"
];

export const Mutation = {
  loginWithMail: (
    _parent: any,
    emailLoginId: any,
    context: Context
  ): Promise<LoginResponse> =>
    authentication.loginWithMail(context, emailLoginId),
  signInOrSignUp: async (
    _parent: any,
    email: any,
    context: Context
  ): Promise<Response> => authentication.signInOrSignUp(context, email.email)
};
