// import getUserId from "../utils/getUserId"

// const User = {
//     email: {
//         fragment: 'fragment userId on User { id }',
//         resolve(parent, args, { prisma, request }, info) {
//             const userId = getUserId(request)
//             if(userId && userId === parent.id) {
//                 return parent.email
//             } else {
//                 return null
//             }
//         }
//     }
// }

// export {User as default} 