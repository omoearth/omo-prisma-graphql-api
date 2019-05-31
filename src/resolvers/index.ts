import { extractFragmentReplacements } from 'prisma-binding';

import { Query } from './Query';
import { Mutation } from './Mutation';
import { Subscription } from './Subscription';

export const resolvers = {
  Query,
  Mutation,
  Subscription,
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
