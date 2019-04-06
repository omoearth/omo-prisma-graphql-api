import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import prisma from './prisma'

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import Vote from './resolvers/Vote'
import City from './resolvers/City'

const pubsub = new PubSub()

const server = new GraphQLServer ({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query,
        Mutation,
        Subscription,
        City,
        Vote
    },
    context: {
        db,
        pubsub,
        prisma
    }
}) 

server.start(()=> {
    console.log("server is running on localhost:4000")
})