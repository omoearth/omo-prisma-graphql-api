const Mutation = {
    createUser(parent, { data }, { prisma }, info) {
        return prisma.mutation.createUser({ data }, info)
    },
    deleteUser(parent, { id }, { prisma }, info) {
        return prisma.mutation.deleteUser({
            where: { id }
        }, info)
    },
    updateUser(parent, { id, data }, { prisma }, info) {
        return prisma.mutation.updateUser({
            where: {
                id
            },
            data
        }, info)
    },
    createCity(parent, { data }, { prisma }, info) {
        return prisma.mutation.createCity({
            data: {
                name: data.name,
                available: data.available,
                major: {
                    connect: {
                        id: data.major
                    }
                }
            }
        }, info)
    },
    deleteCity(parent, { id }, { prisma }, info) {
        return prisma.mutation.deleteCity({
            where: { id }
        }, info)
    },
    updateCity(parent, { id, data }, { prisma }, info) {
        return prisma.mutation.updateCity({
            where: { id },
            data
        }, info)
    },
    createVote(parent, { data }, { prisma }, info) {
        return prisma.mutation.createVote({
            data: {
                author: {
                    connect: {
                        id: data.author
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
    deleteVote(parent, { id }, { prisma }, info) {
        return prisma.mutation.deleteVote({
            where: { id }
        }, info)
    },
    updateVote(parent, { id, data  }, { prisma }, info) {
        return prisma.mutation.updateVote({
            where: { id },
            data
        }, info)
    }
}

export { Mutation as default }