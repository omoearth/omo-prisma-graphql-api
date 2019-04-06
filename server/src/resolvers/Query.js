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
    cities(parent, args, { prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = { name_contains: args.query }
        }

        return prisma.query.cities(opArgs, info)
    },
    votes(parent, args, { prisma }, info) {
        return prisma.query.votes(null, info)
    }
}

export { Query as default }