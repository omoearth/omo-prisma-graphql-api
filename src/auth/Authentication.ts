require('dotenv').config();
const cookieparser = require('cookieparser');
import { PublicMutations } from '../resolvers/Mutation';
import { PublicQueries } from '../resolvers/Query';
import { PublicSubcriptions } from '../resolvers/Subscription';
import * as bcrypt from 'bcryptjs';
import { UserCreateInput, User, Invitation } from '../generated/prisma-client';
import uuid from 'uuid';
import { Role } from '../auth/Roles';
import * as jwt from 'jsonwebtoken';
import { getUserClaims } from '../resolvers/Types/User';
import { LoginUser } from '../QueryArguments';
import Context from '../definitions/Interfaces';
import { NodeMailer } from '../messaging/email/NodeMailer';

export class Authentication {
	async loginWithMail(context: Context, emailLoginId: any) {
		let id = emailLoginId.emailLoginId;
		let user = await context.prisma.emailLogin({ id: id }).user();
		if (!user) throw Error('No Login found, or already used');
		await context.prisma.deleteEmailLogin({ id: id });
		return await this.getLoginResponse(context, user);
	}
	private nodeMailer = new NodeMailer();
	async sendLoginLink(context: Context, identifier: any) {
		let user = await context.prisma.user({ identifier: identifier.identifier });
		if (!user) throw Error('user not found');

		let emailLogin = await context.prisma.createEmailLogin({ user: { connect: { id: user.id } } });
		return await this.nodeMailer.sendLoginLink(emailLogin, user);
	}
	private async hashPassword(password: string) {
		if (password.length < 8) {
			throw new Error('Password has to be minimum 8 characters long');
		}
		return await bcrypt.hash(password, 10);
	}
	private async generateToken(user: User, context: Context) {
		let token = jwt.sign(
			{
				id: user.id,
				username: user.name || user.identifier,
				claims: getUserClaims(user.id, context)
			},
			process.env.OMO_SECRET || '',
			{
				expiresIn: `${process.env.TOKEN_EXPIRES}d`
			}
		);
		return token;
	}
	private getUserIdentifier(invitation: Invitation) {
		switch (invitation.type) {
			case 'EMAIL':
			case 'PERSONALLINK':
				return invitation.email || invitation.id;
			default:
				return uuid.v4();
		}
	}
	private async getLoginResponse(context: Context, user: User) {
		return {
			user,
			token: await this.generateToken(user, context)
		};
	}

	async loginUser(context: Context, loginData: LoginUser) {
		const user = await context.prisma.user({ identifier: loginData.identifier });
		if (!user) {
			throw Error('Invalid Login');
		}
		const passwordMatch = await bcrypt.compare(loginData.password, user.password || '');
		if (!passwordMatch) {
			throw Error('Invalid Login');
		}
		return await this.getLoginResponse(context, user);
	}

	async registerUserByInvitation(context: Context, invitation: Invitation): Promise<User> {
		let id = this.getUserIdentifier(invitation);
		let newUser: UserCreateInput = {
			identifier: id,
			identificationType: 'LOGIN',
			wallet: { create: {} },
			name:
				invitation.name ||
				invitation.email ||
				`invited by ${await context.prisma.invitation({ id: invitation.id }).invitedBy.name}`,
			password: await this.hashPassword(id),
			roles: { connect: { name: Role.INVITED } }
		};

		let cityid = await context.prisma.invitation({ id: invitation.id }).city().id();
		if (cityid) {
			newUser.city = { connect: { id: cityid } };
		}

		var user = await context.prisma.createUser(newUser);

		if (invitation.type != 'GLOBALLINK') {
			await context.prisma.updateInvitation({
				data: { state: 'TemporaryAccount' },
				where: { id: invitation.id }
			});
		}
		return user;
	}

	async signInOrSignUpUserByInvitation(context: Context, invitationId: string) {
		let invitation = await context.prisma.invitation({ id: invitationId });
		if (!invitation) {
			throw new Error("User couldn't created because there was no invitation");
		}
		switch (invitation.state) {
			case 'Invited': {
				let user = await this.registerUserByInvitation(context, invitation);
				return await this.getLoginResponse(context, user);
			}
			case 'TemporaryAccount': {
				let user = await context.prisma.user({
					identifier: this.getUserIdentifier(invitation)
				});
				if (user) return await this.getLoginResponse(context, user);
				else {
					throw new Error('user not found');
				}
			}
			case 'Finished':
				throw new Error('Invitationlink was already used');
		}
	}
}

export const authenticateMiddleware = async (resolve: any, root: any, args: any, context: Context, info: any) => {
	if (root) return await resolve(root, args, context, info);
	let token: any;
	try {
		if (context.request.request.headers.cookie) {
			const parsed = cookieparser.parse(context.request.request.headers.cookie);
			var auth = JSON.parse(parsed.auth);
			token = jwt.verify(auth.accessToken, process.env.OMO_SECRET || '');
			context.userid = token.id;
			context.claims = token.claims;
			return await resolve(root, args, context, info);
		}
	} catch (e) {
		let endpoint = info.fieldName;
		let operation = info.operation.operation;

		// Subquery of authenticated
		if (root) {
			return await resolve(root, args, context, info);
		}

		switch (operation) {
			case 'query':
				if (PublicQueries.includes(endpoint)) {
					return await resolve(root, args, context, info);
				}
			case 'mutation':
				if (PublicMutations.includes(endpoint)) {
					return await resolve(root, args, context, info);
				}
			case 'subscription':
				if (PublicSubcriptions.includes(endpoint)) {
					return await resolve(root, args, context, info);
				}
		}
		return new Error('Not authenticated, please login');
	}
	return await resolve(root, args, context, info);
};
