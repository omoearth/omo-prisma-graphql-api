import Context from '../../definitions/Interfaces';

export const Role = {
	claims: ({ id }: any, _args: any, ctx: Context) => ctx.prisma.role({ id: id }).claims()
};
