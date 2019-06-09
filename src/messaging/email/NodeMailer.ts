require('dotenv').config();
import { prisma, InvitationPromise, Invitation, User, City } from '../../generated/prisma.ts';
import { Response } from '../../QueryArguments';

const nodemailer = require('nodemailer');

export class NodeMailer {
  transporter: any;
  constructor() {
    console.log(process.env.MAILPORT);
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILHOST,
      port: process.env.MAILPORT,
      secure: process.env.MAILSECURE === 'true',
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASSWORD,
      },
    });
  }

  private replacements(str: string, replacements: Map<string, string>): string {
    for (let [key, value] of replacements) {
      str = str.replace(key, value);
    }
    return str;
  }

  async sendMailTemplate(templateName: string, to: string, replacements: Map<string, string>) {
    let template = await prisma.emailTemplate({ name: templateName });
    if (!template) return { sucess: false, message: `Template with name ${templateName} was not found in database` };

    try {
      let info = await this.transporter.sendMail({
        from: template.from,
        to: to,
        subject: this.replacements(template.subject, replacements),
        text: this.replacements(template.text || '', replacements),
        html: this.replacements(template.html || '', replacements),
      });
      console.log(info);
    } catch (error) {
      return { sucess: false, message: error.message };
    }
    return { sucess: false, message: 'message sent succesfully' };
  }

  async sendInvitation(invitation: Invitation, inviter: User, city: City) {
    let replacements = new Map<string, string>();
    replacements.set('$-{inviter}', inviter.name || '');
    replacements.set('$-{invitee}', invitation.name || '');
    replacements.set('$-{link}', `${process.env.EARTH_HTTP_ENDPOINT}/invite/${invitation.id}`);
    return this.sendMailTemplate('INVITATION', invitation.email || '', replacements);
  }
}
