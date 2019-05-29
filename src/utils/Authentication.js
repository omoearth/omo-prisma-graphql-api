import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

async function hashPassword(password) {
  if (password.length < 8) {
    throw new Error("Password has to be minimum 8 characters long")
  }
  return await bcrypt.hash(password, 10);
}

async function registerUser(
  prisma,
  email,
  password
) {
  let user = await prisma.mutation.createUser({
    data: {
      email: email,
      password: await hashPassword(password)
    }
  });
  return user;
}

async function loginUser(prisma, email, password) {
  const user = await prisma.query.user({
    where: {
      email: email
    }
  });

  if (!user) {
    throw new Error('Invalid Login');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid Login');
  }

  const token = jwt.sign({
      id: user.id,
      username: user.email,
    },
    process.env.OMO_SECRET, {
      expiresIn: '30d', // token will expire in 30days
    },
  );
  return {
    token,
    user,
  };
}

export {
  registerUser,
  loginUser
};
