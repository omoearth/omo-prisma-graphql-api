import { Context } from '../utils/Utils';

export const Query = {
  currentUser: (_parent: any, _args: any, context: Context) => {
    if (!context.user) {
      throw new Error('Not Authenticated');
    }
    return context.prisma.user({
      id: context.user.id,
    });
  },
  cities: (_parent: any, _args: any, context: Context) => {
    return context.prisma.cities({});
  },
};

// users(parent, { first, skip, after, orderBy, filter }, { prisma }, info) {
//     const args = {
//         skip,
//         first,
//         after,
//         orderBy
//     }

//     if (filter) {
//         args.where = {
//             OR: [{
//                 name_contains: filter
//             }]
//         }
//     }

//     return prisma.query.users(args, info)
// },

// cities(parent, { skip, first, after, orderBy, filter }, { prisma }, info) {
//     const args = {
//         skip,
//         first,
//         after,
//         orderBy,
//         where: {
//             available: true
//         }
//     }
//     if (filter) {
//         args.where.OR = [{
//             name_contains: filter
//         }]
//     }
//     return prisma.query.cities(args, info)
// },

// me(parent, { id }, { prisma, request }, info) {
//     const userId = getUserId(request)
//     return prisma.query.user({
//         where: {
//             id: userId
//         }
//     }, info)
// },

// async city(parent, { id }, { prisma, request }, info) {
//     const userId = getUserId(request, false)
//     const cities = await prisma.query.cities({
//         where: {
//             id,
//             OR: [{
//                 available: true
//             }, {
//                 author: {
//                     id: userId
//                 }
//             }]
//         }
//     }, info)
//     if(cities.length === 0){
//         throw new Error("no city found")
//     }
//     return cities[0]
// }
