import { Prisma, User } from "../generated/prisma-client";
import { PubSub } from "graphql-yoga";
import { FragmentReplacement } from "graphql-binding";

export default interface Context {
  context: string[];
  userid: any;
  user: User;
  pubsub: PubSub;
  prisma: Prisma;
  fragmentReplacements: FragmentReplacement[];
  request: any;
  claims: string[];
}
