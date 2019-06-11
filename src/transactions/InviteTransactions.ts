import Context from "../definitions/Interfaces";
import { NodeMailer } from "../messaging/email/NodeMailer";
import { Authentication } from "../auth/Authentication";
import { TransactionSystem } from "./TransactionSystem";
import { TransactionType, AssetType } from "../definitions/Enums";

export class InviteTransactions {
  authentication = new Authentication();
  transactionSystem = new TransactionSystem();

  async createInvitation(context: Context, invite: any) {
    var invitation = await context.prisma.createInvitation(invite.invite);
    var inviter = await context.prisma.user({ id: context.userid });
    if (!inviter) throw Error("not authenticated");
    var city = await context.prisma.invitation({ id: invitation.id }).city();

    switch (invitation.type) {
      case "EMAIL":
        return await new NodeMailer().sendInvitation(invitation, inviter, city);
    }
    return "error";
  }
  async activateAccount(context: Context, data: any) {
    let response = await this.authentication.loginWithMail(context, data);
    if (!response.token) throw Error("mail couldnt send");
    //wrong user !!!!
    let userCityWallet = await context.prisma
      .user({ id: context.userid })
      .city()
      .wallet();
    if (!userCityWallet) throw Error("no city");

    //CREATE von X Votes auf User
    //TRANSFER von X  VOtes to City
    // this.transactionSystem.transact(
    //   context,
    //   "",
    //   userCityWallet.id,
    //   TransactionType.CREATE,
    //   AssetType.CITYVOTES,
    //   5
    // );

    return response;
  }
}
