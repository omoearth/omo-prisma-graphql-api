import Context from '../../definitions/Interfaces';

export const Balance = {
	asset: ({ id }: any, _args: any, ctx: Context) => ctx.prisma.balance({ id }).asset()
};
