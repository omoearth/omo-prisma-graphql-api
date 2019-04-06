import { GraphQLServer, PubSub } from 'graphql-yoga'
import prisma from './prisma'

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import City from './resolvers/City'
import Vote from './resolvers/Vote'
import User from './resolvers/User'

const pubsub = new PubSub()

const server = new GraphQLServer ({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query,
        Mutation,
        Subscription,
        City,
        Vote,
        User
    },
    context: {
        pubsub,
        prisma
    }
}) 

server.start(()=> {
    console.log("server is running on localhost:4000")
})