import { rule, shield, allow, deny, or, and, not } from "graphql-shield";
import { Claim } from "./Claims";
import Context from "../definitions/Interfaces";

function claim(claimName: string) {
  return rule()(
    async (_parent: any, _args: any, context: Context, _info: any) => {
      return context.claims.includes(claimName);
    }
  );
}

export const authorizationMiddleware = shield({
  Query: {
    //   cities: and(claim(Claim.USER_READ), claim(Claim.FOO_UPDATE)),
    //   cities: or(claim(Claim.USER_READ), claim(Claim.FOO_UPDATE),and()),
    cities: claim(Claim.CITY_READ)
    //   cities: claim(Claim.FOO_DELETE),
    //   cities: not(claim(Claim.FOO_DELETE)),
    //   cities: deny,
  },
  Mutation: {
    voteCity: claim(Claim.TRANSACTION_TRANSFER)
  },
  Subscription: {}
});
