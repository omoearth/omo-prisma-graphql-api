require('dotenv').config();
const jwt = require('jsonwebtoken');

import { GraphQLServer, PubSub } from 'graphql-yoga';
import { prisma } from './generated/prisma.ts';
import { resolvers, fragmentReplacements } from './resolvers/index';
const pubsub = new PubSub();

function getUser(request: any) {
  try {
    let tokenWithBearer = request.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    if (token) {
      return jwt.verify(token, process.env.OMO_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
}
// const getUser = request => {
//   try {
//     let tokenWithBearer = request.headers.authorization || '';
//     const token = tokenWithBearer.split(' ')[1];
//     if (token) {
//       return jwt.verify(token, process.env.OMO_SECRET);
//     }
//     return null;
//   } catch (err) {
//     return null;
//   }
// };
const user = null;
// const context = {
//   user,
//   pubsub,
//   prisma,
//   fragmentReplacements,
//   request,
// };
export const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => ({
    user,
    pubsub,
    prisma,
    fragmentReplacements,
    request,
  }),
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
