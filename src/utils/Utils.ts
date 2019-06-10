import { Prisma, User } from '../generated/prisma-client';
import { PubSub } from 'graphql-yoga';
import { FragmentReplacement } from 'graphql-binding';
import { Request } from 'graphql-upload';

export interface Context {
  userid: any;
  user: User;
  pubsub: PubSub;
  prisma: Prisma;
  fragmentReplacements: FragmentReplacement[];
  request: any;
  claims: [string];
}
