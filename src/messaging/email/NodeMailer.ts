require("dotenv").config();
import { prisma, User, EmailLogin } from "../../generated/prisma-client";
import { Response } from "../../definitions/Interfaces";

const nodemailer = require("nodemailer");

export class NodeMailer {
  transporter: any;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILHOST,
      port: process.env.MAILPORT,
      secure: process.env.MAILSECURE === "true",
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASSWORD
      }
    });
  }

  private replacements(str: string, replacements: Map<string, string>): string {
    for (let [key, value] of replacements) {
      str = str.replace(key, value);
    }
    return str;
  }

  private async sendMailTemplate(
    templateName: string,
    to: string,
    replacements: Map<string, string>
  ): Promise<Response> {
    let template = await prisma.emailTemplate({ name: templateName });
    if (!template)
      return {
        success: false,
        message: `Template with name ${templateName} was not found in database`
      };

    try {
      let info = await this.transporter.sendMail({
        from: template.from,
        to: to,
        subject: this.replacements(template.subject, replacements),
        text: this.replacements(template.text || "", replacements),
        html: this.replacements(template.html || "", replacements)
      });
      console.log(info);
    } catch (error) {
      return { success: false, message: error.message };
    }
    return { success: true, message: "message sent succesfully" };
  }

  // async sendInvitation(invitation: Invitation, inviter: User, city: City) {
  //   let replacements = new Map<string, string>();
  //   replacements.set("$-{inviter}", inviter.name || "");
  //   replacements.set("$-{invitee}", invitation.name || "");
  //   replacements.set(
  //     "$-{link}",
  //     `${process.env.EARTH_HTTP_ENDPOINT}/${invitation.id}`
  //   );
  //   return this.sendMailTemplate(
  //     "INVITATION",
  //     invitation.email || "",
  //     replacements
  //   );
  // }

  async sendLoginLink(emailLogin: EmailLogin, user: User): Promise<Response> {
    return this.sendLogin(emailLogin, user, "LOGINWITHMAIL", "login");
  }

  async sendRegisterLink(
    emailLogin: EmailLogin,
    user: User
  ): Promise<Response> {
    return this.sendLogin(emailLogin, user, "REGISTERWITHMAIL", "register");
  }

  private async sendLogin(
    emailLogin: EmailLogin,
    user: User,
    template: string,
    path: string
  ): Promise<Response> {
    let replacements = new Map<string, string>();
    replacements.set("$-{user}", user.name || "Greenfluencer");
    replacements.set(
      "$-{link}",
      `${process.env.EARTH_HTTP_ENDPOINT}/${path}/${emailLogin.id}`
    );
    return this.sendMailTemplate(template, user.identifier || "", replacements);
  }
}
