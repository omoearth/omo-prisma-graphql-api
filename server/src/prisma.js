import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: 'viXDp4H6A3owG37pdm7ptxzqLtkhTKNsJTV3nqRLDmQYyzu6K',
    fragmentReplacements
}) 

export { prisma as default }
