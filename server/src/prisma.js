import {Prisma} from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
}) 

// prisma.query.users(null, '{id name }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.query.votes(null, '{id city {name} user {name}}').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.createCity({
//     data: {
//         name: "Hamburg",
//         leader: {
//             connect: {
//                 id: "cju4ni54500bp07593jiw4okz"
//             }
//         },
//         published: false
//     } 
// }, '{id name published leader {name}}').then((data) => {
//     console.log(data)
//     return prisma.query.users(null, '{id name email}')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.updateCity({
//     where: {id: "cju4pibay00s90759eav19z1r"},
//     data: {
//         name: "Madrid",
//     }
// }, '{id name published}').then((data) => {
//     console.log(data)
//     return prisma.query.cities(null, '{id name published}')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })