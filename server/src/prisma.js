import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/prisma/dev'
}) 

export { prisma as default }

// const createCityForUser = async (userId, data) => {
//     const userExists = await prisma.exists.User({
//         id: userId
//     })
    
//     if(!userExists) {
//         throw new Error("no user with this ide")
//     }

//     const city = await prisma.mutation.createCity({
//         data: {  
//             ...data,
//             leader: {
//                 connect: {
//                     id: userId
//                 }
//             }
//         }
//     }, '{ id name leader { id name } }' )
//     return city.leader
// }

// createCityForUser("cju4q5qda00y60759ws3ko0kb", {
//     name: "Berlin",
//     published: true
// }).then((city) => {
//     console.log(JSON.stringify(city, undefined, 2))
// }).catch((err) => {
//      console.log(err)
// })

// prisma.exists.User({
//     email: "cajus@styl.earth"
// }).then((exists) => {
//     console.log(exists)
// })

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