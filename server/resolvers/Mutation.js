import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, args, {db}, info) {
        const emailTaken = db.users.some((user) => {
            return user.email === args.data.email 
        })
        if (emailTaken) {
            throw new Error("Email already taken")
        }
        const user = {
            id: uuidv4(),
            ...args.data
        }
        db.users.push(user)

        return user
    },
    deleteUser(parent, args, {db}, info) {
        const userIndex = db.users.findIndex((user) => user.id === args.id)
        if(userIndex === -1) {
            throw new Error("user not existing")
        }
        const deletedUsers = db.users.splice(userIndex, 1)

        votes = db.votes.filter((vote) => {
            const match = vote.user === args.id
            return !match
        })
        return deletedUsers[0]
    },
    createCity(parent, args, {db}, info) {
        const countryExist = db.countries.some((country) => country.id === args.data.country) 
        if(!countryExist) {
            throw new Error("country not found")
        }
        const city = {
            id: uuidv4(),
            ...args.data
        }
        db.cities.push(city)
        return city
    }
}

export { Mutation as default }
