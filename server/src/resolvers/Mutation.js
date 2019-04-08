import bcrypt from 'bcryptjs'
import getUserId from '../utils/getUserId'
import generateToken from '../utils/generateToken'
 
const Mutation = {
    async createUser(parent, { data }, { prisma }, info) {
        if(data.password.length < 8) {
            throw new Error("Password has to be minimum 8 characters long")
        }
        const password = await bcrypt.hash(data.password, 10)

        const user = await prisma.mutation.createUser({ 
            data: {
                ...data,
                password
            }
        })
        return {
            user,
            token: generateToken(user.id)
        }
    },
    async loginUser(parent, { data }, { prisma }, info) {
        const user = await prisma.query.user({
            where: {
                email: data.email
            }          
        })
        if (!user) {
            throw new Error("Login failed")
        }
        const isMatch = await bcrypt.compare(data.password, user.password)
        if (!isMatch) {
            throw new Error("Login failed")
        }
        return {
            user,
            token: generateToken(user.id)
        }
    },
    deleteUser(parent, args, { prisma, request }, info) {
        const userId = getUserId(request)
        return prisma.mutation.deleteUser({
            where: { id: userId }
        }, info)
    },
    updateUser(parent, { data }, { prisma, request}, info) {
        const userId = getUserId(request)
        return prisma.mutation.updateUser({
            where: {
                id: userId
            },
            data
        }, info)
    },
    createCity(parent, { data }, { prisma, request }, info) {
        const userId = getUserId(request)

        return prisma.mutation.createCity({
            data: {
                name: data.name,
                available: data.available,
                author: {
                    connect: {
                        id: userId
                    }
                }
            }
        }, info)
    },
    async deleteCity(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request)
        const cityExists = await prisma.exists.City({
            id,
            author: {
                id: userId
            }
        })
        if (!cityExists) {
            throw new Error("Not possible to delete City")
        }
        return prisma.mutation.deleteCity({
            where: { id }
        }, info)
    },
    async updateCity(parent, { id, data }, { prisma, request }, info) {
        const userId = getUserId(request)
        const cityExists = await prisma.exists.City({
            id,
            author: {
                id: userId
            }
        })
        if(!cityExists) {
            throw new Error("Not possible to update City")
        }
        return prisma.mutation.updateCity({
            where: { id },
            data
        }, info)
    },
    async createVote(parent, { data }, { prisma, request }, info) {
        const userId = getUserId(request)
        const cityExists = await prisma.exists.City({
           id: data.city,
           available: true
        })
        if(!cityExists){
            throw new Error("City doesn't not exists")
        }
        return prisma.mutation.createVote({
            data: {
                author: {
                    connect: {
                        id: userId
                    }
                },
                city: {
                    connect: {
                        id: data.city
                    }
                }
            }
        }, info)
    },
    async deleteVote(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request)
        const voteExists = await prisma.exists.Vote({
            id,
            author: {
                id: userId
            }
        })
        if(!voteExists) {
            throw new Error("Not possible to delete vote")
        }
        return prisma.mutation.deleteVote({
            where: { id }
        }, info)
    }
}

export { Mutation as default }