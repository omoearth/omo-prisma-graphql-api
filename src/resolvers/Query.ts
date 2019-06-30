import { Context } from "../definitions/Interfaces";

export const PublicQueries: Array<String> = ["currentUser", "cities", "offers"];

export const Query = {
  currentUser: (_parent: any, _args: any, context: Context) => context.user,
  cities: (_parent: any, _args: any, context: Context) =>
    context.prisma.cities({}),
  users: (_parent: any, _args: any, context: Context) =>
    context.prisma.users({}),
  offers: async (_parent: any, _args: any, context: Context) =>
    context.prisma.offers({ where: { OR: [{ category: _args.category }] } })
};
