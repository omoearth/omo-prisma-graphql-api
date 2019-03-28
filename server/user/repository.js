"use strict";

const InvalidCredentialsError = require('../common/errors.js');

class UserRepository {
  
  constructor(context) {
    this._context = context;
  }
  
  signup(name, email, password) {
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const self = this;
    
    return bcrypt.hash(password, saltRounds)
    .then(hash =>
      self._context.prisma.createUser(
        {
          name: name,
          email: email,
          hash: hash
        }));
  }
  
  async login(email, password) {
    const bcrypt = require('bcrypt');
    const crypto = require('crypto');
    
    const sessionTokenLength = 48;
    const foundUsers = await this._context.prisma.users({
      where:{
        email: email
      }
    });
    
    if (foundUsers.length !== 1) {
      throw new InvalidCredentialsError();
    }
    const user = foundUsers[0];
    
    const isPasswordValid = await bcrypt.compare(password, user.hash);
    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }
  
    const tokenValue = await new Promise((resolve, reject) => {
      crypto.randomBytes(sessionTokenLength, function (crypto_err, buffer) {
        if (crypto_err) {
          // Will this ever happen?
          reject(new Error("Couldn't generate the random bytes (length:" + sessionTokenLength + ") " +
            "for the session token."));
        } else {
          resolve(buffer.toString('hex'));
        }
      });
    });
    
    return this._context.prisma.createSession({
      user: {
        connect: {
          id: user.id
        }
      },
      token: tokenValue,
      validTo: new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
    });
  }
  
  async logout(token) {
  
  }
}

module.exports = UserRepository;
