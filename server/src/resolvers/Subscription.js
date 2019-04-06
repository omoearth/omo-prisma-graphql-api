const Subscription = {
    vote: {
        subscribe(parent, { cityId }, { prisma }, info){
            return prisma.subscription.vote({
                where: {
                    node: {
                        city: {
                            id: cityId
                        }
                    }
                }
            }, info)
        }
    },
    city: {
        subscribe(parent, args , { prisma }, info) {
            return prisma.subscription.city({
                where: {
                    node: {
                        available: true
                    }
                }
            }, info)
        }
    }
}

export { Subscription as default }