export declare const resolvers: {
    Query: {
        currentUser: (_parent: any, _args: any, context: import("../utils/Utils").Context) => import("../generated/prisma.ts").UserNullablePromise;
        claims: (_parent: any, context: import("../utils/Utils").Context) => import("../generated/prisma.ts").FragmentableArray<import("../generated/prisma.ts").Claim>;
    };
    Mutation: {
        register: (_parent: any, { email, password }: any, { prisma }: any) => Promise<import("../generated/prisma.ts").User>;
        login: (_parent: any, { email, password }: any, { prisma }: any) => Promise<{
            token: string;
            user: import("../generated/prisma.ts").User;
        }>;
    };
};
export declare const fragmentReplacements: import("graphql-binding").FragmentReplacement[];
