const Mutation = {
    async createUser(parent, { data }, { prisma }, info) {
        return prisma.mutation.createUser({ data }, info)
    },
    async deleteUser(parent, { id }, { prisma }, info) {
        return prisma.mutation.deleteUser({ where: { id }}, info) 
    },
    async updateUser(parent, { id, data }, { prisma }, info) {
        return prisma.mutation.updateUser({
            where: { id },
            data
        }, info )
    },
    async createCity(parent, { data }, { prisma }, info) {
        return prisma.mutation.createCity({ data }, info)
    },
    async deleteCity(parent, { id }, { prisma }, info) {
        return prisma.mutation.deleteCity({ where: { id }}, info) 
    },
    async updateCity(parent, { id, data }, { prisma }, info) {
        return prisma.mutation.updateCity({
            where: { id },
            data
        }, info )
    }
}

export { Mutation as default }
