import { Context } from '../../utils/Utils';

export const Wallet = {
  balances: ({ id }: any, _args: any, ctx: Context) => {
    return ctx.prisma.wallet({ id }).balances();
  },
};
