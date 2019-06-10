import { Context } from '../../utils/Utils';

export const Balance = {
  asset: ({ id }: any, _args: any, ctx: Context) => {
    return ctx.prisma.balance({ id }).asset();
  },
};
