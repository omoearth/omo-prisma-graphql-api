import { VoteCity, LoginUser } from '../QueryArguments';
import { OfferChange, OfferChangeEvent } from '../resolvers/ChangeEvents';
import Context from '../definitions/Interfaces';
import { CityTransactions } from '../transactions/CityTransactions';
import { Authentication } from '../auth/Authentication';
import { InviteTransactions } from '../transactions/InviteTransactions';

const authentication = new Authentication();
const cityTransactions = new CityTransactions();
const inviteTransactions = new InviteTransactions();

export const PublicMutations: Array<String> = [ 'register', 'login', 'buyOffer', 'signInOrSignUp' ];

export const Mutation = {
	login: (_parent: any, loginData: LoginUser, context: Context) => authentication.loginUser(context, loginData),
	loginWithMail: (_parent: any, emailLoginId: string, context: Context) =>
		authentication.loginWithMail(context, emailLoginId),
	sendLoginLink: (_parent: any, identifier: string, context: Context) =>
		authentication.sendLoginLink(context, identifier),
	voteCity: (_parent: any, cityVote: VoteCity, context: Context) => cityTransactions.voteCity(context, cityVote),
	invite: async (_parent: any, invite: any, context: Context) => inviteTransactions.createInvitation(context, invite),
	signInOrSignUp: async (_parent: any, invite: any, context: Context) =>
		authentication.signInOrSignUpUserByInvitation(context, invite.invitationId),
	buyOffer: async (_parent: any, { offerId }: any, context: Context) => {
		let counter = (await context.prisma.offer({ id: offerId }).count()) || 0;
		const offer = await context.prisma.updateOffer({
			where: { id: offerId },
			data: { count: counter + 1 }
		});

		if (offer) {
			OfferChange.publish(offer, OfferChangeEvent.BUY);
			return offer;
		}
		return offer;
	}
};
