import getUserId from "../utils/getUserId"

const User = {
    cities: {
        fragment: 'fragment userId on User { id }',
        resolve(parent, args, { prisma }, info ){
            return prisma.query.cities({
                where: {
                    available: true,
                    author: {
                        id: parent.id
                    }
                }
            })
        }
    },
    email: {
        fragment: 'fragment userId on User { id }',
        resolve(parent, args, { prisma, request }, info) {
            const userId = getUserId(request)
            if(userId && userId === parent.id) {
                return parent.email
            } else {
                return null
            }
        }
    }
}

export {User as default} 