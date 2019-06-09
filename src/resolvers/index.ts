// import { extractFragmentReplacements } from 'prisma-binding';

// import { Query } from './Query';
// import { Mutation } from './Mutation';
// import { Subscription } from './Subscription';

// export const resolvers = {
//   Query,
//   Mutation,
//   Subscription,
// };

// export const fragmentReplacements = extractFragmentReplacements(resolvers);

import { Query } from './Query';
import { Subscription } from './Subscription';
import { Mutation } from './Mutation';
import { City } from './Types/City';
import { Wallet } from './Types/Wallet';
import { Balance } from './Types/Balance';

export default {
  Query,
  Mutation,
  Subscription,
  City,
  Wallet,
  Balance,
};
