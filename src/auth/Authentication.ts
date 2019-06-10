require('dotenv').config();

const jwt = require('jsonwebtoken');
const cookieparser = require('cookieparser');
import { Context } from '../utils/Utils';
import { PublicMutations } from '../resolvers/Mutation';
import { PublicQueries } from '../resolvers/Query';
import { PublicSubcriptions } from '../resolvers/Subscription';

export const autheticate = async (resolve: any, root: any, args: any, context: Context, info: any) => {
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
