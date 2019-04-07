import getUserId from "../utils/getUserId"

const Query = {
    users(parent, args, { prisma }, info) {
        const opArgs = {}
        
        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }, {
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)
    },

    cities(parent, { filter }, { prisma }, info) {
        const args = {
            where: {
                available: true
            }
        }
        if (filter) {
            args.where.OR = [{ 
                name_contains: filter 
            }]
        }
        return prisma.query.cities(args, info)
    },

    myCities(parent, { filter }, { prisma, request }, info){
        const userId = getUserId(request)
        const args = {
            where: {
                author: {
                    id: userId 
                }
            }
        }
        if(filter) {
            args.where = {
                name_contains: filter
            }
        }
        return prisma.query.cities(args, info)
    },

    votes(parent, args, { prisma }, info) {
        return prisma.query.votes(null, info)
    },

    me(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request)
        return prisma.query.user({
            where: {
                id: userId
            }
        }, info)
    },

    async city(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request, false)
        const cities = await prisma.query.cities({
            where: {
                id,
                OR: [{
                    available: true
                }, {
                    author: {
                        id: userId
                    }
                }]
            }
        }, info)
        if(cities.length === 0){
            throw new Error("no city found")
        }
        return cities[0]
    }
}

export { Query as default }