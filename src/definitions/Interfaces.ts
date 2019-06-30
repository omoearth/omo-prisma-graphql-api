import { Prisma, User } from "../generated/prisma-client";
import { PubSub } from "graphql-yoga";
import { FragmentReplacement } from "graphql-binding";
export interface Response {
  success: boolean;
  message: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
  user: User;
  token: string;
}

export interface Context {
  context: string[];
  user: User | null;
  pubsub: PubSub;
  prisma: Prisma;
  fragmentReplacements: FragmentReplacement[];
  request: any;
  claims: string[];
}
