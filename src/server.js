require('dotenv').config();
const jwt = require('jsonwebtoken');

import {
  GraphQLServer,
  PubSub
} from 'graphql-yoga';
import prisma from './prisma';
import {
  resolvers,
  fragmentReplacements
} from './resolvers/index';
const pubsub = new PubSub();

const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, process.env.OMO_SECRET);
    }
    return null;
  } catch (err) {
    return null;
  }
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context(request) {

    let tokenWithBearer = '';
    if (request.headers && request.headers && request.headers.authorization) {
      tokenWithBearer = request.headers.authorization;
    }
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);

    return {
      user,
      pubsub,
      prisma,
      request
    };
  },
  fragmentReplacements,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
});


export {
  server as
  default
};
