import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
    type Query {
        cities: City!
    }
    type City {
        id: ID!
        name: String!
        votes: Int!
        country: String!
    }
`

const resolvers = {
    Query: {
       cities() {
           return {
               id: "123456789",
               name: "Munich",
               votes: 500,
               country: "Germany"
           }
       }
    }
}

const server = new GraphQLServer ({
    typeDefs,
    resolvers
}) 

server.start(()=> {
    console.log("server is runing on localhost:4000")
})