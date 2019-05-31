export declare const Mutation: {
    register: (_parent: any, { email, password }: any, { prisma }: any) => Promise<import("../generated/prisma.ts").User>;
    login: (_parent: any, { email, password }: any, { prisma }: any) => Promise<{
        token: string;
        user: import("../generated/prisma.ts").User;
    }>;
};
