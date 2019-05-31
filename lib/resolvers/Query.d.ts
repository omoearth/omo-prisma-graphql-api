import { Context } from '../utils/Utils';
export declare const Query: {
    currentUser: (_parent: any, _args: any, context: Context) => import("../generated/prisma.ts").UserNullablePromise;
    claims: (_parent: any, context: Context) => import("../generated/prisma.ts").FragmentableArray<import("../generated/prisma.ts").Claim>;
};
