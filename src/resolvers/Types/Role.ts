import { Context } from "../../utils/Utils";

export const Role = {
  claims: ({ id }: any, _args: any, ctx: Context) => {
    return ctx.prisma.role({ id: id }).claims();
  }
};
