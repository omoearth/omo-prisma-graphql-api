import { Context } from "../../utils/Utils";

export const User = {
  wallet: ({ id }: any, _args: any, ctx: Context) => {
    ctx.pr
    return ctx.prisma.city({ id: id }).wallet();
  },

};


async function userClaims(identifier: String, context: Context) {
  let data = await context.prisma.$graphql(
    `query {
          user(where: { identifier: "${identifier}" }) {
            roles {
              claims {
                name
              }
            }
          }
        }`
  );

  let list: Array<string> = [];
  data.user.roles.forEach((role: any) => {
    role.claims.forEach((claim: any) => {
      if (!list.includes(claim.name)) {
        list.push(claim.name);
      }
    });
  });
  return list;