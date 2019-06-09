import { prisma } from '../../src/generated/prisma-client';

export class EmailTemplateSeeder {
  async seed() {
    await prisma.createEmailTemplate({
      name: 'INVITATION',
      from: '"Omo Sapiens | OMOTION.EARTH" <noReply@omo.earth>',
      subject: '$-{inviter} has invited you to become a greenfluencer',
      html:
        '<p>Hello <b>$-{invitee}</b>,</p><p>your link: <a href="$-{link}">Become Greenfluencer</a></p><br><p>Kind Regards</p><p>Omo</p>',
      text: `Hello $-{invitee},
       your link $-{link}
       Kind Regards 
       Omo`,
    });
  }
}
