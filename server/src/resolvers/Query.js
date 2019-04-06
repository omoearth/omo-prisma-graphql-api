const Query = {
    users(parent, { filter }, {db, prisma}, info) {
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
    cities(parent, { filter }, {db, prisma}, info) { 
        const args = {}
        if (filter) {
            args.where = {
                name_contains: filter
            }
        }
        return prisma.query.cities(args, info)
    },
    votes(parent, {filter}, {db, prisma}, info) {
        const args = {}
        if (filter) {
            args.where = {
                city_contains: filter
            }
        }
        return prisma.query.votes(args, info)
    }
}

export { Query as default }
