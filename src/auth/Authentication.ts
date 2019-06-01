require('dotenv').config();

import * as jwt from 'jsonwebtoken';
import { Context } from '../utils/Utils';
import { PublicMutations } from '../resolvers/Mutation';
import { PublicQueries } from '../resolvers/Query';
import { PublicSubcriptions } from '../resolvers/Subscription';

export const autheticate = async (resolve: any, root: any, args: any, context: Context, info: any) => {
  let token: any;
  try {
    token = jwt.verify(context.request.get('Authorization'), process.env.OMO_SECRET || '');
    context.claims = token.claims;
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
