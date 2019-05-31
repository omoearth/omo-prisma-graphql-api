import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from './Utils';

async function userClaims(email: String, context: Context) {
  let data = await context.prisma.$graphql(
    `query {
          user(where: { email: "${email}" }) {
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

async function hashPassword(password: string) {
  if (password.length < 8) {
    throw new Error('Password has to be minimum 8 characters long');
  }
  return await bcrypt.hash(password, 10);
}

async function registerUser(context: Context, email: string, password: string) {
  let user = await context.prisma.createUser({
    email: email,
    password: await hashPassword(password),
  });
  return user;
}

async function loginUser(context: Context, loginData: LoginUser) {
  const user = await context.prisma.user({
    email: loginData.email,
  });

  if (!user) {
    throw new Error('Invalid Login');
  }

  const passwordMatch = await bcrypt.compare(loginData.password, user.password || '');

  if (!passwordMatch) {
    throw new Error('Invalid Login');
  }
  let claims = userClaims(user.email, context);

  const token = jwt.sign(
    {
      id: user.id,
      username: user.email,
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

export { registerUser, loginUser };
