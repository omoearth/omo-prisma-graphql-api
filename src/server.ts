require("dotenv").config();
const jwt = require("jsonwebtoken");
import { PubSub } from "graphql-subscriptions";
import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
// import { resolvers, fragmentReplacements } from "./resolvers/index";
import resolvers from "./resolvers";
import { autheticate } from "./auth/Authentication";
import { authorize } from "./auth/Authorization";
export const pubsub = new PubSub();

function getUser(request: any) {
  try {
    let tokenWithBearer = request.headers.authorization || "";
    const token = tokenWithBearer.split(" ")[1];
    if (token) {
      return jwt.verify(token, process.env.OMO_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
}

export const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    pubsub,
    prisma,
    user: getUser(request)
    // fragmentReplacements,
  }),
  middlewares: [autheticate, authorize]
  // resolverValidationOptions: {
  //   requireResolversForResolveType: false,
  // },
});
