import { Context } from '../../utils/Utils';

export const City = {
  wallet: ({ id }: any, _args: any, ctx: Context) => {
    return ctx.prisma.city({ id: id }).wallet();
  },
  votes: async ({ id }: any, _args: any, ctx: Context) => {
    let balances = await ctx.prisma
      .city({ id: id })
      .wallet()
      .balances({ where: { asset: { name: 'CITYVOTES' } } });
    return balances.length > 0 ? balances[0].value : 0;
  },
  name: async ({ id }: any, _args: any, ctx: Context) => {
    return 'OMO_' + (await ctx.prisma.city({ id }).name());
  },
};
