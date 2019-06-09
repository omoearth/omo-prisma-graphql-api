import { registerUser, loginUser } from "../utils/Authentication";
import { Context } from "../utils/Utils";
import { VoteCity, LoginUser } from "../QueryArguments";
import {
  CityChange,
  CityChangeEvent,
  OfferChange,
  OfferChangeEvent
} from "../resolvers/ChangeEvents";
import {
  Invitation,
  InvitationType,
  InvitationCreateInput,
  Transaction,
  TransactionCreateInput,
  User,
  City,
  Int
} from "../generated/prisma.ts";
import { NodeMailer } from "../messaging/email/NodeMailer";

export const PublicMutations: Array<String> = [
  "register",
  "login",
  "buyOffer",
  "voteCity"
];

export const Mutation = {
  register: async (_parent: any, { email, password }: any, context: Context) =>
    registerUser(context, email, password),
  login: async (_parent: any, loginData: LoginUser, context: Context) => {
    return loginUser(context, loginData);
  },
  voteCity: async (_parent: any, cityVote: VoteCity, context: Context) => {
    let votes =
      (await context.prisma.city({ id: cityVote.cityId }).votes()) || 0;
    const city = await context.prisma.updateCity({
      where: { id: cityVote.cityId },
      data: { votes: votes + cityVote.count }
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
      data: { count: counter + 1 }
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
      case "EMAIL":
        return await new NodeMailer().sendInvitation(invitation, inviter, city);
    }
    return "error";
  },
  transaction: async (_parent: any, data: any, context: Context) => {
    let from: User = data.user;
    let to: City = data.city;
    let amount: Int = data.amount;

    if (from.votes && from.votes > amount) {
      let cityVotes = (to.votes || 0) + amount;
      let userVotes = (from.votes || 0) - amount;
      context.prisma.updateCity({
        data: { votes: cityVotes },
        where: { id: to.id }
      });
      context.prisma.updateUser({
        data: { votes: userVotes },
        where: { id: from.id }
      });
      context.prisma.createTransaction({
        input: { connect: { id: from.id } },
        output: { connect: { id: to.id } },
        amount: amount
      });
      return `${amount} votes sucessfully transfered from ${from.name} to ${
        to.name
      }`;
    } else {
      return "User hasn't enough votes";
    }
  }
};

// await prisma.createTransaction({
//   input: { connect: { id: this.wallets.walletGenesis.id } },
//   output: { connect: { id: this.wallets.walletOmoSapiens.id } },
//   amount: 1,
//   asset: "VOTE",
//   operation: "TRANSFER"
// });
// await prisma.createTransaction({
//   input: { connect: { id: this.wallets.walletGenesis.id } },
//   output: { connect: { id: this.wallets.walletOmoSapiens.id } },
//   amount: 1,
//   asset: "OMO",
//   operation: "TRANSFER"
// });
