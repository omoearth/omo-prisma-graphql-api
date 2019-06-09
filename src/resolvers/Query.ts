import { Context } from "../utils/Utils";

export const PublicQueries: Array<String> = ["currentUser", "cities", "offers"];

export const Query = {
  currentUser: (_parent: any, _args: any, context: Context) => {
    return context.prisma.user({
      id: context.userid
    });
  },
  cities: async (_parent: any, _args: any, context: Context) => {
    let cities = await context.prisma.cities({});
    return cities;
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
  }
};
