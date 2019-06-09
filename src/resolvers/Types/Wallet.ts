import { Context } from '../../utils/Utils';

export const Wallet = {
  balances: ({ id, name, balances }: any, _args: any, ctx: Context) => {
    console.log(`wallet: ${id} ${name} ${balances} ${JSON.stringify(_args)}`);
    return ctx.prisma.wallet({ id }).balances();
  },
};
