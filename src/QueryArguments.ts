import { Int, City } from './generated/prisma-client';

export type LoginUser = {
	identifier: string;
	password: string;
};

export type VoteCity = {
	cityId: string;
	amount: Int;
};
