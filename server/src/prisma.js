import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/prisma/dev',
    secret: 'viXDp4H6A3owG37pdm7ptxzqLtkhTKNsJTV3nqRLDmQYyzu6K'
}) 

export { prisma as default }
