import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4'

let users = [
    {
        id: "1",
        name: "Sam",
        email: "sam@styl.earth"
    },
    {
        id: "2",
        name: "Timo",
        email: "timo@styl.earth"
    },
    {
        id: "3",
        name: "Daniel",
        email: "daniel@styl.earth"
    }
]

let cities = [
    {
        id: "1",
        name: "Munich",
        country: "A",
        votes: "1"
    },
    {
        id: "2",
        name: "Barcelona",
        country: "B",
        votes: "2"
    },
    {
        id: "3",
        name: "Paris",
        country: "C",
        votes: "3"
    }
]

let countries = [
    {
        id: "A",
        name: "Germany"
    },
    {
        id: "B",
        name: "Spain"
        
    },
    {
        id: "C",
        name: "France"
    }
]

let votes = [
    {id: "1", user: "1", city: "1"},
    {id: "2", user: "2", city: "2"},
    {id: "3", user: "2", city: "3"},
    {id: "4", user: "2", city: "2"}
]

const typeDefs = `
    type Query {
        users(filter: String): [User!]!
        cities(filter: String): [City!]!
        votes: [Vote!]!
    }
    type Mutation {
        createUser(data: CreateUserInput): User!
        deleteUser(id: ID!): User! 
        createCity(data: CreateCityInput): City!
    }
    input CreateUserInput {
        name: String!
        email: String!
    } 
    input CreateCityInput {
        name: String!
        country: ID!
    } 
    type User {
        id: ID!
        name: String!
        email: String!
    }
    type City {
        id: ID!
        name: String!
        votes: [Vote!]
        country: Country!
    }
    type Country {
        id: ID!
        name: String!
    }
    type Vote {
        id: ID!
        city: City!
        user: User!
    }
`

const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if(!args.filter ) {
                return users
            } 
            return users.filter((user) => {
                return user.name.toLocaleLowerCase().includes(args.filter.toLocaleLowerCase())
            })
        },
       cities(parent, args, ctx, info) {
           if(!args.filter) {
               return cities
           }
           return cities.filter((city) => {
               const isCityMatch = city.name.toLocaleLowerCase().includes(args.filter.toLocaleLowerCase())
               return isCityMatch 
           })
       },
       votes(parent, args, ctx, info) {
            return votes
        }
    },
    Mutation: {
        createUser(parent, args, ctx, info) {
            const emailTaken = users.some((user) => {
                return user.email === args.data.email 
            })
            if (emailTaken) {
                throw new Error("Email already taken")
            }
            const user = {
                id: uuidv4(),
                ...args.data
            }
            users.push(user)

            return user
        },
        deleteUser(parent, args, ctx, info) {
            const userIndex = users.findIndex((user) => user.id === args.id)
            if(userIndex === -1) {
                throw new Error("user not existing")
            }
            const deletedUsers = users.splice(userIndex, 1)

            votes = votes.filter((vote) => {
                const match = vote.user === args.id
                return !match
            })
            return deletedUsers[0]
        },
        createCity(parent, args, ctx, info) {
            const countryExist = countries.some((country) => country.id === args.data.country) 
            if(!countryExist) {
                throw new Error("country not found")
            }
            const city = {
                id: uuidv4(),
                ...args.data
            }
            cities.push(city)
            return city
        }
    },
    City: {
        country(parent, args, ctx, info) {
            return countries.find((country) => {
                return country.id === parent.country
            })
        },
        votes(parent, args, ctx, info) {
            return votes.filter((vote) => {
                return vote.city === parent.id
            })
        }
    },
    Vote: {
        city(parent, args, ctx, info) {
            return cities.find((city) => {
                return city.id === parent.city
            })
        },
        user(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.user
            })
        }
    }

}

const server = new GraphQLServer ({
    typeDefs,
    resolvers
}) 

server.start(()=> {
    console.log("server is running on localhost:4000")
})