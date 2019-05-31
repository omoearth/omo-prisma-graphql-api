import { extractFragmentReplacements } from 'prisma-binding';

import { Query } from './Query';
import { Mutation } from './Mutation';
// import Subscription from './Subscription';
// import City from './City';
// import User from './User';
// import Votes from './Votes';

export const resolvers = {
  Query,
  Mutation,
  // Subscription,
  // City,
  // User,
  // Votes
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
