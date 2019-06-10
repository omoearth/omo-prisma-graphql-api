import Context from '../../definitions/Interfaces';

export const Wallet = {
	balances: ({ id }: any, _args: any, ctx: Context) => ctx.prisma.wallet({ id }).balances()
};
