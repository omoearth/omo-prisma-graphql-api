import { registerUser, loginUser } from '../utils/Authentication';
import { Context } from '../utils/Utils';
import { VoteCity, LoginUser } from '../QueryArguments';
import { CityChange, CityChangeEvent, OfferChange, OfferChangeEvent } from '../resolvers/ChangeEvents';
import { Invitation, InvitationType, InvitationCreateInput } from '../generated/prisma.ts';
import { NodeMailer } from '../messaging/email/NodeMailer';

export const PublicMutations: Array<String> = ['register', 'login', 'buyOffer', 'voteCity'];

export const Mutation = {
  register: async (_parent: any, { email, password }: any, context: Context) => registerUser(context, email, password),
  login: async (_parent: any, loginData: LoginUser, context: Context) => {
    return loginUser(context, loginData);
  },
  voteCity: async (_parent: any, cityVote: VoteCity, context: Context) => {
    let votes = (await context.prisma.city({ id: cityVote.cityId }).votes()) || 0;
    const city = await context.prisma.updateCity({
      where: { id: cityVote.cityId },
      data: { votes: votes + cityVote.count },
    });

    if (city) {
      CityChange.publish(city, CityChangeEvent.VOTE);
      return city;
    }
    return null;
  },
  buyOffer: async (_parent: any, { offerId }: any, context: Context) => {
    let counter = (await context.prisma.offer({ id: offerId }).count()) || 0;
    const offer = await context.prisma.updateOffer({
      where: { id: offerId },
      data: { count: counter + 1 },
    });

    if (offer) {
      OfferChange.publish(offer, OfferChangeEvent.BUY);
      return offer;
    }
    return offer;
  },
  invite: async (_parent: any, invite: any, context: Context) => {
    var invitation = await context.prisma.createInvitation(invite.invite);
    var inviter = await context.prisma.invitation({ id: invitation.id }).user();
    var city = await context.prisma.invitation({ id: invitation.id }).city();

    switch (invitation.type) {
      case 'EMAIL':
        return await new NodeMailer().sendInvitation(invitation, inviter, city);
    }
    return 'error';
  },
  signup: async (_parent: any, invite: any, context: Context) => {},
};
