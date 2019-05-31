import { Prisma } from '../generated/prisma.ts';
import { PubSub } from 'graphql-yoga';
import { FragmentReplacement } from 'graphql-binding';
export interface Context {
    user: any;
    pubsub: PubSub;
    prisma: Prisma;
    fragmentReplacements: FragmentReplacement[];
}
