const Subscription = {
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