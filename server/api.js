import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import City from './resolvers/City'
import Vote from './resolvers/Vote'

const server = new GraphQLServer ({
    typeDefs: "./schema.graphql",
    resolvers: {
        Query,
        Mutation,
        City,
        Vote
    },
    context: {
        db
    }
}) 

server.start(()=> {
    console.log("server is running on localhost:4000")
})