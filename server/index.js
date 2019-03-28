const {prisma} = require('./generated/prisma-client');
const {GraphQLServer} = require('graphql-yoga');
const UserRepository = require('./user/repository.js');

const resolvers = {
  Query: {
    users(root, args, context) {
      return context.prisma.users()
    },
    cities(root, args, context) {
      return context.prisma.cities()
    },
    city(root, args, context) {
      return context.prisma.city({id: args.cityId})
    }
  },
  Mutation: {
    signup(root, args, context) {
      return new UserRepository(context)
                  .signup(args.name, args.email, args.password);
    },
    async login(root, args, context) {
      return new UserRepository(context)
                  .login(args.email, args.password);
    },
    logout(root, args, context) {
      return new UserRepository(context)
                  .logout(args.token);
    },
    proposeNewCity(root, args, context) {
      return context.prisma.createCity(
        {
          name: args.name
        },
      )
    },
    voteForCity(root, args, context) {
      return context.prisma.updateCity({
        data: {
          votes: {
            create: {
              user: {
                connect: {
                  id: args.userId
                }
              }
            }
          }
        },
        where: {
          id: args.cityId
        }
      })
    }
  },
  User: {},
  City: {
    voteCount(root, args, context) {
      return prisma.votesConnection({
        where: {
          city: {
            id: root.id
          }
        }
      })
      .aggregate()
      .count();
    },
    votes(root, args, context) {
      return prisma.city({id: root.id}).votes();
    }
  },
  Vote: {
    user(root, args, context) {
      return prisma.vote({
        id: root.id
      }).user()
    },
    city(root, args, context) {
      return prisma.vote({
        id: root.id
      }).city()
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
});
// noinspection JSIgnoredPromiseFromCall
server.start(() => console.log('Server is running on http://localhost:4000'));