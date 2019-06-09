import { Int, City } from "./generated/prisma.ts";

export type LoginUser = {
  email: string;
  password: string;
};

export type VoteCity = {
  cityId: string;
  amount: Int;
};
