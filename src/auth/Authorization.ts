// import { rule, shield } from 'graphql-shield';
// import Claim from './Claims';
// import { Context } from '../utils/Utils';

// const rules = {
//   isAuthorized: rule()((parent, args, context: Context) => {
//     // not logged in
//     if (!context.user) {
//       return false;
//     }
//     // const userId = getUserId(context);
//     // return Boolean(userId);
//   }),
//   // isPostOwner: rule()(async (parent, { id }, context) => {
//   //   const userId = getUserId(context);
//   //   const author = await context.prisma.post({ id }).author();
//   //   return userId === author.id;
//   // }),
// };

// export const Authorization = shield({
//   Query: {
//     me: rules.isAuthenticatedUser,
//     //   filterPosts: rules.isAuthenticatedUser,
//     //   post: rules.isAuthenticatedUser,
//   },
//   Mutation: {
//     // createDraft: rules.isAuthenticatedUser,
//     // deletePost: rules.isPostOwner,
//     // publish: rules.isPostOwner,
//   },
// });
