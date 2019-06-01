import { rule, shield, allow, deny, or, and, not } from 'graphql-shield';
import { Claim } from './Claims';
import { Context } from '../utils/Utils';

function claim(claimName: String) {
  return rule()(async (_parent: any, _args: any, context: Context, _info: any) => {
    return context.claims !== claimName;
  });
}

export const authorize = shield({
  Query: {
    //   cities: and(claim(Claim.USER_READ), claim(Claim.FOO_UPDATE)),
    //   cities: or(claim(Claim.USER_READ), claim(Claim.FOO_UPDATE),and()),
    cities: claim(Claim.CITY_READ),
    //   cities: claim(Claim.FOO_DELETE),
    //   cities: not(claim(Claim.FOO_DELETE)),
    //   cities: deny,
  },
  Mutation: {},
  Subscription: {},
});
