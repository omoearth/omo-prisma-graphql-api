import { extractFragmentReplacements } from "prisma-binding";
import { Query } from "./Query";
import { Subscription } from "./Subscription";
import { Mutation } from "./Mutation";
import { City } from "./Types/City";
import { Wallet } from "./Types/Wallet";
import { Balance } from "./Types/Balance";
import { User } from "./Types/User";
import { Role } from "./Types/Role";

export const resolvers = {
  Query,
  Mutation,
  Subscription,
  City,
  Wallet,
  Balance,
  User,
  Role
};

export const fragmentReplacements = extractFragmentReplacements(resolvers);
