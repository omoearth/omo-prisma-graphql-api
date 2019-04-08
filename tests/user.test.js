// import 'cross-fetch/polyfill'
// import ApolloBoost, {gql} from 'apollo-boost'

// const client = new ApolloBoost({
//     uri: 'http://localhost:4000'
// })

// test('Should create new user', async () => {
//     const createUser = gql`
//         mutation {
//             createUser(data: {
//                 name: "Samuel Andert",
//                 email: "samuel@andert.me",
//                 password: "password123"
//             }) {
//                 token,
//                 user {
//                     id
//                 }
//             } 
//         }
//     `
//     const response = await client.mutate({
//         mutation: createUser
//     })
// }) 