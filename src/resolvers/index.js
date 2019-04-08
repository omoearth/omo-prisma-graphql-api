import { extractFragmentReplacements } from 'prisma-binding'

import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'
import City from './City'
import Vote from './Vote'
import User from './User'

const resolvers = {
    Query,
    Mutation,
    Subscription,
    City,
    Vote,
    User
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { fragmentReplacements, resolvers } 