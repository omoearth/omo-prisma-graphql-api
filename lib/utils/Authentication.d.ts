import { Prisma } from '../generated/prisma.ts';
declare function registerUser(prisma: Prisma, email: string, password: string): Promise<import("../generated/prisma.ts").User>;
declare function loginUser(prisma: Prisma, email: string, password: string): Promise<{
    token: string;
    user: import("../generated/prisma.ts").User;
}>;
export { registerUser, loginUser };
