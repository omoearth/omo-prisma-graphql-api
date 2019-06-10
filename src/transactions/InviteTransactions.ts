import Context from "../definitions/Interfaces";
import { NodeMailer } from "../messaging/email/NodeMailer";

export class InviteTransactions {
  async createInvitation(context: Context, invite: any) {
    var invitation = await context.prisma.createInvitation(invite.invite);
    var inviter = await context.prisma
      .invitation({ id: context.userid })
      .invitedBy();
    var city = await context.prisma.invitation({ id: invitation.id }).city();

    switch (invitation.type) {
      case "EMAIL":
        return await new NodeMailer().sendInvitation(invitation, inviter, city);
    }
    return "error";
  }
}
