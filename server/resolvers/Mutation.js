import uuidv4 from 'uuid/v4'

const Mutation = {
    createUser(parent, {data}, {db}, info) {
        const emailTaken = db.users.some((user) => {
            return user.email === data.email 
        })
        if (emailTaken) {
            throw new Error("Email already taken")
        }
        const user = {
            id: uuidv4(),
            ...data
        }
        db.users.push(user)

        return user
    },
    updateUser(parent, {id, data}, {db}, info) {
        const user = db.users.find((user) => user.id === id )
        if (!user) {
            throw new Error ("no user with this id found")
        }
        if (typeof data.email === 'string') {
            const emailTaken = db.users.find((user) => user.email === data.email)
            if(emailTaken) {
                throw new Error("Email is already taken")
            }
            user.email = data.email
        }
        if (typeof data.name === 'string') {
            user.name = data.name
        }
        return user
    },
    deleteUser(parent, {id}, {db}, info) {
        const userIndex = db.users.findIndex((user) => user.id === id)
        if(userIndex === -1) {
            throw new Error("user not existing")
        }
        const deletedUsers = db.users.splice(userIndex, 1)

        votes = db.votes.filter((vote) => {
            const match = vote.user === id
            return !match
        })
        return deletedUsers[0]
    },
    createCity(parent, {data}, {db, pubsub}, info) {
        const countryExist = db.countries.some((country) => country.id === data.country) 
        if(!countryExist) {
            throw new Error("country not found")
        }
        const city = {
            id: uuidv4(),
            ...data
        }
        db.cities.push(city)
        pubsub.publish('city', {city})
        return city
    },
    createVote(parent, {data}, {db, pubsub}, info) {
        const cityExist = db.cities.some((city) => city.id === data.city) 
        const userExist = db.users.some((user) => user.id === data.user) 

        if(!cityExist) {
            throw new Error("no city found with this name")
        }
        if(!userExist) {
            throw new Error("no user found")
        }

        const vote = {
            id: uuidv4(),
            ...data
        }

        db.votes.push(vote)

        pubsub.publish(`vote ${data.city}`, { vote })
        return vote
    }
}

export { Mutation as default }
