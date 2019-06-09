import { extractFragmentReplacements } from 'prisma-binding';
import { Query } from './Query';
import { Subscription } from './Subscription';
import { Mutation } from './Mutation';
import { City } from './Types/City';
import { Wallet } from './Types/Wallet';
import { Balance } from './Types/Balance';

export const resolvers = {
  Query,
  Mutation,
  Subscription,
  City,
  Wallet,
  Balance,
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
