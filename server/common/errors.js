"use strict";

class InvalidCredentialsError extends Error {
  constructor(){
    super("Invalid credentials for user");
  }
}
module.exports = InvalidCredentialsError;