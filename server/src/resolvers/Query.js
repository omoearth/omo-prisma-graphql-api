const Query = {
    users(parent, { filter }, { prisma }, info) {
        const args = {} 
        if (filter) {
            args.where = {
                OR: [{
                    name_contains: filter
                },{
                    email_contains: filter
                }]
            }
        }
        return prisma.query.users(args, info)
    },
    cities(parent, { filter }, { prisma }, info) { 
        const args = {}
        if (filter) {
            args.where = {
                name_contains: filter
            }
        }
        return prisma.query.cities(args, info)
    }
}

export { Query as default }
