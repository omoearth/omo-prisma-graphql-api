import bcrypt from 'bcryptjs'
import getUserId from '../utils/getUserId'
import generateToken from '../utils/generateToken'
import hashPassword from '../utils/hashPassword'
 
const Mutation = {
    async createUser(parent, { data }, { prisma }, info) {
        const password = await hashPassword(data.password)
        console.log(password)
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
   async updateUser(parent, { data }, { prisma, request}, info) {
        const userId = getUserId(request)
        if(typeof data.password === 'string') {
            data.password = await hashPassword(data.password)
        }
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
                // author: {
                //     connect: {
                //         id: userId
                //     }
                // }
            }
        }, info)
    },
    async deleteCity(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request)
        // const cityExists = await prisma.exists.City({
        //     id,
        //     author: {
        //         id: userId
        //     }
        // })
        if (!cityExists) {
            throw new Error("Not possible to delete City")
        }
        return prisma.mutation.deleteCity({
            where: { id }
        }, info)
    },
    async updateCity(parent, { id, data }, { prisma, request }, info) {
        const userId = getUserId(request)
        // const cityExists = await prisma.exists.City({
        //     id,
        //     author: {
        //         id: userId
        //     }
        // })
        if(!cityExists) {
            throw new Error("Not possible to update City")
        }
        return prisma.mutation.updateCity({
            where: { id },
            data
        }, info)
    }
}

export { Mutation as default }