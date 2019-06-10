import { Context } from "../utils/Utils";

export const PublicQueries: Array<String> = ["currentUser", "cities", "offers"];

export const Query = {
  currentUser: (_parent: any, _args: any, context: Context) => {
    return context.prisma.user({
      id: context.userid
    });
  },
  cities: (_parent: any, _args: any, context: Context) => {
    return context.prisma.cities({});
  },
  users: (_parent: any, _args: any, context: Context) => {
    return context.prisma.users({});
  },
  offers: async (_parent: any, _args: any, context: Context) => {
    let offers = await context.prisma.offers({
      where: {
        OR: [
          {
            category: _args.category
          }
        ]
      }
    });
    return offers;
  },
  city: (_parent: any, _args: any, context: Context) => {
    return context.prisma.city({ name: "Munich" });
  }
};
