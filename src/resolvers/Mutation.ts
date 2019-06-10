import { registerUser, loginUser } from '../utils/Authentication';
import { Context } from '../utils/Utils';
import { VoteCity, LoginUser } from '../QueryArguments';
import { OfferChange, OfferChangeEvent, CityChange, CityChangeEvent } from '../resolvers/ChangeEvents';
import { NodeMailer } from '../messaging/email/NodeMailer';
import { TransactionSystem } from '../utils/TransactionSystem';
import { TransactionType } from '../enums/TransactionType';
import { Asset } from '../enums/Asset';

const transactionSystem = new TransactionSystem();

export const PublicMutations: Array<String> = ['register', 'login', 'buyOffer'];

export const Mutation = {
  register: async (_parent: any, { email, password }: any, context: Context) => registerUser(context, email, password),
  login: async (_parent: any, loginData: LoginUser, context: Context) => {
    return loginUser(context, loginData);
  },
  voteCity: async (_parent: any, cityVote: VoteCity, context: Context) => {
    let cityWalletId = await context.prisma
      .city({ id: cityVote.cityId })
      .wallet()
      .id();
    let userWalletId = await context.prisma
      .user({ id: context.userid })
      .wallet()
      .id();
    await transactionSystem.transact(
      context,
      userWalletId,
      cityWalletId,
      TransactionType.TRANSFER,
      Asset.CITYVOTES,
      cityVote.amount
    );

    //Subscription
    let city = await context.prisma.city({ id: cityVote.cityId });
    if (city) {
      CityChange.publish(city, CityChangeEvent.VOTE);
    }
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
