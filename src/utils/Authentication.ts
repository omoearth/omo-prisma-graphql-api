import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from './Utils';
import { UserCreateInput } from '../generated/prisma.ts';
import { Role } from '../auth/Roles';

async function userClaims(identifier: String, context: Context) {
  let data = await context.prisma.$graphql(
    `query {
          user(where: { identifier: "${identifier}" }) {
            roles {
              claims {
                name
              }
            }
          }
        }`
  );

  let list: Array<string> = [];
  data.user.roles.forEach((role: any) => {
    role.claims.forEach((claim: any) => {
      if (!list.includes(claim.name)) {
        list.push(claim.name);
      }
    });
  });
  return list;
}

// async function hashPassword(password: string) {
//   if (password.length < 8) {
//     throw new Error('Password has to be minimum 8 characters long');
//   }
//   return await bcrypt.hash(password, 10);
// }

// async function registerUser(context: Context, email: string, password: string): User {
//   let user = await context.prisma.createUser({
//     email: email,
//     password: await hashPassword(password),
//   });
//   return user;
// }

async function signupUser(context: Context, invitationId: string) {
  let invitation = await context.prisma.invitation({ id: invitationId });
  if (!invitation) throw new Error("User couldn't created because there was no invitation");

  let newUser: UserCreateInput = { identifier: `${invitation.id}`, identificationType: 'LOGIN' };
  switch (invitation.type) {
    case 'EMAIL':
      if (!invitation.email) throw new Error("User couldn't created because email was not provided");
      newUser = { identifier: invitation.email, identificationType: 'LOGIN' };
    case 'PERSONALLINK':
      newUser = { identifier: `${invitation.id}`, identificationType: 'LOGIN' };
      break;
  }

  let cityid = await context.prisma
    .invitation({ id: invitationId })
    .city()
    .id();
  if (cityid) {
    newUser.city = { connect: { id: cityid } };
  }
  if (invitation.name || invitation.email) {
    newUser.name = invitation.name || invitation.email;
  } else {
    newUser.name = `invited by ${await context.prisma.invitation({ id: invitationId }).user.name}`;
  }
  newUser.roles = { connect: { name: Role.INVITED } };

  var user = await context.prisma.createUser(newUser);
  let claims = await userClaims(user.identifier, context);
  const token = jwt.sign(
    {
      id: user.id,
      username: user.name || user.identifier,
      claims: claims,
    },
    process.env.OMO_SECRET || '',
    {
      expiresIn: `${process.env.TOKEN_EXPIRES}d`,
    }
  );
  return {
    token,
    user,
    claims,
  };
}

// async function loginUser(context: Context, loginData: LoginUser) {
//   const user = await context.prisma.user({
//     // email: loginData.email,
//   });

//   if (!user) {
//     throw new Error('Invalid Login');
//   }

//   const passwordMatch = await bcrypt.compare(loginData.password, user.password || '');

//   if (!passwordMatch) {
//     throw new Error('Invalid Login');
//   }
//   let claims = await userClaims(user.email, context);
//   const token = jwt.sign(
//     {
//       id: user.id,
//       username: user.email,
//       claims: claims,
//     },
//     process.env.OMO_SECRET || '',
//     {
//       expiresIn: `${process.env.TOKEN_EXPIRES}d`,
//     }
//   );

//   return {
//     token,
//     user,
//     claims,
//   };
// }

export { signupUser };
