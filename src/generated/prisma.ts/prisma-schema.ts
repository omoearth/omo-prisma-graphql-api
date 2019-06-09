// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCity {
  count: Int!
}

type AggregateClaim {
  count: Int!
}

type AggregateEmailTemplate {
  count: Int!
}

type AggregateInvitation {
  count: Int!
}

type AggregateOffer {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type City {
  id: ID!
  name: String!
  available: Boolean!
  votes: Int
}

type CityConnection {
  pageInfo: PageInfo!
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  id: ID
  name: String!
  available: Boolean!
  votes: Int
}

input CityCreateOneInput {
  create: CityCreateInput
  connect: CityWhereUniqueInput
}

type CityEdge {
  node: City!
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  available_ASC
  available_DESC
  votes_ASC
  votes_DESC
}

type CityPreviousValues {
  id: ID!
  name: String!
  available: Boolean!
  votes: Int
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CityWhereInput
  AND: [CitySubscriptionWhereInput!]
  OR: [CitySubscriptionWhereInput!]
  NOT: [CitySubscriptionWhereInput!]
}

input CityUpdateDataInput {
  name: String
  available: Boolean
  votes: Int
}

input CityUpdateInput {
  name: String
  available: Boolean
  votes: Int
}

input CityUpdateManyMutationInput {
  name: String
  available: Boolean
  votes: Int
}

input CityUpdateOneInput {
  create: CityCreateInput
  update: CityUpdateDataInput
  upsert: CityUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CityWhereUniqueInput
}

input CityUpsertNestedInput {
  update: CityUpdateDataInput!
  create: CityCreateInput!
}

input CityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  available: Boolean
  available_not: Boolean
  votes: Int
  votes_not: Int
  votes_in: [Int!]
  votes_not_in: [Int!]
  votes_lt: Int
  votes_lte: Int
  votes_gt: Int
  votes_gte: Int
  AND: [CityWhereInput!]
  OR: [CityWhereInput!]
  NOT: [CityWhereInput!]
}

input CityWhereUniqueInput {
  id: ID
  name: String
}

type Claim {
  id: ID!
  name: String!
  description: String
}

type ClaimConnection {
  pageInfo: PageInfo!
  edges: [ClaimEdge]!
  aggregate: AggregateClaim!
}

input ClaimCreateInput {
  id: ID
  name: String!
  description: String
}

input ClaimCreateManyInput {
  create: [ClaimCreateInput!]
  connect: [ClaimWhereUniqueInput!]
}

type ClaimEdge {
  node: Claim!
  cursor: String!
}

enum ClaimOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type ClaimPreviousValues {
  id: ID!
  name: String!
  description: String
}

input ClaimScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ClaimScalarWhereInput!]
  OR: [ClaimScalarWhereInput!]
  NOT: [ClaimScalarWhereInput!]
}

type ClaimSubscriptionPayload {
  mutation: MutationType!
  node: Claim
  updatedFields: [String!]
  previousValues: ClaimPreviousValues
}

input ClaimSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClaimWhereInput
  AND: [ClaimSubscriptionWhereInput!]
  OR: [ClaimSubscriptionWhereInput!]
  NOT: [ClaimSubscriptionWhereInput!]
}

input ClaimUpdateDataInput {
  name: String
  description: String
}

input ClaimUpdateInput {
  name: String
  description: String
}

input ClaimUpdateManyDataInput {
  name: String
  description: String
}

input ClaimUpdateManyInput {
  create: [ClaimCreateInput!]
  update: [ClaimUpdateWithWhereUniqueNestedInput!]
  upsert: [ClaimUpsertWithWhereUniqueNestedInput!]
  delete: [ClaimWhereUniqueInput!]
  connect: [ClaimWhereUniqueInput!]
  set: [ClaimWhereUniqueInput!]
  disconnect: [ClaimWhereUniqueInput!]
  deleteMany: [ClaimScalarWhereInput!]
  updateMany: [ClaimUpdateManyWithWhereNestedInput!]
}

input ClaimUpdateManyMutationInput {
  name: String
  description: String
}

input ClaimUpdateManyWithWhereNestedInput {
  where: ClaimScalarWhereInput!
  data: ClaimUpdateManyDataInput!
}

input ClaimUpdateWithWhereUniqueNestedInput {
  where: ClaimWhereUniqueInput!
  data: ClaimUpdateDataInput!
}

input ClaimUpsertWithWhereUniqueNestedInput {
  where: ClaimWhereUniqueInput!
  update: ClaimUpdateDataInput!
  create: ClaimCreateInput!
}

input ClaimWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ClaimWhereInput!]
  OR: [ClaimWhereInput!]
  NOT: [ClaimWhereInput!]
}

input ClaimWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

type EmailTemplate {
  id: ID!
  name: String!
  from: String!
  subject: String!
  text: String
  html: String
}

type EmailTemplateConnection {
  pageInfo: PageInfo!
  edges: [EmailTemplateEdge]!
  aggregate: AggregateEmailTemplate!
}

input EmailTemplateCreateInput {
  id: ID
  name: String!
  from: String!
  subject: String!
  text: String
  html: String
}

type EmailTemplateEdge {
  node: EmailTemplate!
  cursor: String!
}

enum EmailTemplateOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  from_ASC
  from_DESC
  subject_ASC
  subject_DESC
  text_ASC
  text_DESC
  html_ASC
  html_DESC
}

type EmailTemplatePreviousValues {
  id: ID!
  name: String!
  from: String!
  subject: String!
  text: String
  html: String
}

type EmailTemplateSubscriptionPayload {
  mutation: MutationType!
  node: EmailTemplate
  updatedFields: [String!]
  previousValues: EmailTemplatePreviousValues
}

input EmailTemplateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EmailTemplateWhereInput
  AND: [EmailTemplateSubscriptionWhereInput!]
  OR: [EmailTemplateSubscriptionWhereInput!]
  NOT: [EmailTemplateSubscriptionWhereInput!]
}

input EmailTemplateUpdateInput {
  name: String
  from: String
  subject: String
  text: String
  html: String
}

input EmailTemplateUpdateManyMutationInput {
  name: String
  from: String
  subject: String
  text: String
  html: String
}

input EmailTemplateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  from: String
  from_not: String
  from_in: [String!]
  from_not_in: [String!]
  from_lt: String
  from_lte: String
  from_gt: String
  from_gte: String
  from_contains: String
  from_not_contains: String
  from_starts_with: String
  from_not_starts_with: String
  from_ends_with: String
  from_not_ends_with: String
  subject: String
  subject_not: String
  subject_in: [String!]
  subject_not_in: [String!]
  subject_lt: String
  subject_lte: String
  subject_gt: String
  subject_gte: String
  subject_contains: String
  subject_not_contains: String
  subject_starts_with: String
  subject_not_starts_with: String
  subject_ends_with: String
  subject_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  html: String
  html_not: String
  html_in: [String!]
  html_not_in: [String!]
  html_lt: String
  html_lte: String
  html_gt: String
  html_gte: String
  html_contains: String
  html_not_contains: String
  html_starts_with: String
  html_not_starts_with: String
  html_ends_with: String
  html_not_ends_with: String
  AND: [EmailTemplateWhereInput!]
  OR: [EmailTemplateWhereInput!]
  NOT: [EmailTemplateWhereInput!]
}

input EmailTemplateWhereUniqueInput {
  id: ID
  name: String
}

enum IdentificationType {
  LOGIN
  SOCIAL
}

type Invitation {
  id: ID!
  type: InvitationType!
  user: User!
  email: String
  name: String
  city: City
  createdAt: DateTime!
  updatedAt: DateTime!
}

type InvitationConnection {
  pageInfo: PageInfo!
  edges: [InvitationEdge]!
  aggregate: AggregateInvitation!
}

input InvitationCreateInput {
  id: ID
  type: InvitationType!
  user: UserCreateOneInput!
  email: String
  name: String
  city: CityCreateOneInput
}

type InvitationEdge {
  node: Invitation!
  cursor: String!
}

enum InvitationOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvitationPreviousValues {
  id: ID!
  type: InvitationType!
  email: String
  name: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type InvitationSubscriptionPayload {
  mutation: MutationType!
  node: Invitation
  updatedFields: [String!]
  previousValues: InvitationPreviousValues
}

input InvitationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InvitationWhereInput
  AND: [InvitationSubscriptionWhereInput!]
  OR: [InvitationSubscriptionWhereInput!]
  NOT: [InvitationSubscriptionWhereInput!]
}

enum InvitationType {
  EMAIL
  PERSONALLINK
  GLOBALLINK
}

input InvitationUpdateInput {
  type: InvitationType
  user: UserUpdateOneRequiredInput
  email: String
  name: String
  city: CityUpdateOneInput
}

input InvitationUpdateManyMutationInput {
  type: InvitationType
  email: String
  name: String
}

input InvitationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: InvitationType
  type_not: InvitationType
  type_in: [InvitationType!]
  type_not_in: [InvitationType!]
  user: UserWhereInput
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  city: CityWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [InvitationWhereInput!]
  OR: [InvitationWhereInput!]
  NOT: [InvitationWhereInput!]
}

input InvitationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCity(data: CityCreateInput!): City!
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateManyCities(data: CityUpdateManyMutationInput!, where: CityWhereInput): BatchPayload!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  deleteCity(where: CityWhereUniqueInput!): City
  deleteManyCities(where: CityWhereInput): BatchPayload!
  createClaim(data: ClaimCreateInput!): Claim!
  updateClaim(data: ClaimUpdateInput!, where: ClaimWhereUniqueInput!): Claim
  updateManyClaims(data: ClaimUpdateManyMutationInput!, where: ClaimWhereInput): BatchPayload!
  upsertClaim(where: ClaimWhereUniqueInput!, create: ClaimCreateInput!, update: ClaimUpdateInput!): Claim!
  deleteClaim(where: ClaimWhereUniqueInput!): Claim
  deleteManyClaims(where: ClaimWhereInput): BatchPayload!
  createEmailTemplate(data: EmailTemplateCreateInput!): EmailTemplate!
  updateEmailTemplate(data: EmailTemplateUpdateInput!, where: EmailTemplateWhereUniqueInput!): EmailTemplate
  updateManyEmailTemplates(data: EmailTemplateUpdateManyMutationInput!, where: EmailTemplateWhereInput): BatchPayload!
  upsertEmailTemplate(where: EmailTemplateWhereUniqueInput!, create: EmailTemplateCreateInput!, update: EmailTemplateUpdateInput!): EmailTemplate!
  deleteEmailTemplate(where: EmailTemplateWhereUniqueInput!): EmailTemplate
  deleteManyEmailTemplates(where: EmailTemplateWhereInput): BatchPayload!
  createInvitation(data: InvitationCreateInput!): Invitation!
  updateInvitation(data: InvitationUpdateInput!, where: InvitationWhereUniqueInput!): Invitation
  updateManyInvitations(data: InvitationUpdateManyMutationInput!, where: InvitationWhereInput): BatchPayload!
  upsertInvitation(where: InvitationWhereUniqueInput!, create: InvitationCreateInput!, update: InvitationUpdateInput!): Invitation!
  deleteInvitation(where: InvitationWhereUniqueInput!): Invitation
  deleteManyInvitations(where: InvitationWhereInput): BatchPayload!
  createOffer(data: OfferCreateInput!): Offer!
  updateOffer(data: OfferUpdateInput!, where: OfferWhereUniqueInput!): Offer
  updateManyOffers(data: OfferUpdateManyMutationInput!, where: OfferWhereInput): BatchPayload!
  upsertOffer(where: OfferWhereUniqueInput!, create: OfferCreateInput!, update: OfferUpdateInput!): Offer!
  deleteOffer(where: OfferWhereUniqueInput!): Offer
  deleteManyOffers(where: OfferWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Offer {
  id: ID!
  name: String!
  image: String!
  description: String
  availabilityStarts: String
  businessFunction: String
  price: Float
  priceCurrency: String
  category: String
  count: Int
}

type OfferConnection {
  pageInfo: PageInfo!
  edges: [OfferEdge]!
  aggregate: AggregateOffer!
}

input OfferCreateInput {
  id: ID
  name: String!
  image: String!
  description: String
  availabilityStarts: String
  businessFunction: String
  price: Float
  priceCurrency: String
  category: String
  count: Int
}

type OfferEdge {
  node: Offer!
  cursor: String!
}

enum OfferOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  description_ASC
  description_DESC
  availabilityStarts_ASC
  availabilityStarts_DESC
  businessFunction_ASC
  businessFunction_DESC
  price_ASC
  price_DESC
  priceCurrency_ASC
  priceCurrency_DESC
  category_ASC
  category_DESC
  count_ASC
  count_DESC
}

type OfferPreviousValues {
  id: ID!
  name: String!
  image: String!
  description: String
  availabilityStarts: String
  businessFunction: String
  price: Float
  priceCurrency: String
  category: String
  count: Int
}

type OfferSubscriptionPayload {
  mutation: MutationType!
  node: Offer
  updatedFields: [String!]
  previousValues: OfferPreviousValues
}

input OfferSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OfferWhereInput
  AND: [OfferSubscriptionWhereInput!]
  OR: [OfferSubscriptionWhereInput!]
  NOT: [OfferSubscriptionWhereInput!]
}

input OfferUpdateInput {
  name: String
  image: String
  description: String
  availabilityStarts: String
  businessFunction: String
  price: Float
  priceCurrency: String
  category: String
  count: Int
}

input OfferUpdateManyMutationInput {
  name: String
  image: String
  description: String
  availabilityStarts: String
  businessFunction: String
  price: Float
  priceCurrency: String
  category: String
  count: Int
}

input OfferWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  availabilityStarts: String
  availabilityStarts_not: String
  availabilityStarts_in: [String!]
  availabilityStarts_not_in: [String!]
  availabilityStarts_lt: String
  availabilityStarts_lte: String
  availabilityStarts_gt: String
  availabilityStarts_gte: String
  availabilityStarts_contains: String
  availabilityStarts_not_contains: String
  availabilityStarts_starts_with: String
  availabilityStarts_not_starts_with: String
  availabilityStarts_ends_with: String
  availabilityStarts_not_ends_with: String
  businessFunction: String
  businessFunction_not: String
  businessFunction_in: [String!]
  businessFunction_not_in: [String!]
  businessFunction_lt: String
  businessFunction_lte: String
  businessFunction_gt: String
  businessFunction_gte: String
  businessFunction_contains: String
  businessFunction_not_contains: String
  businessFunction_starts_with: String
  businessFunction_not_starts_with: String
  businessFunction_ends_with: String
  businessFunction_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  priceCurrency: String
  priceCurrency_not: String
  priceCurrency_in: [String!]
  priceCurrency_not_in: [String!]
  priceCurrency_lt: String
  priceCurrency_lte: String
  priceCurrency_gt: String
  priceCurrency_gte: String
  priceCurrency_contains: String
  priceCurrency_not_contains: String
  priceCurrency_starts_with: String
  priceCurrency_not_starts_with: String
  priceCurrency_ends_with: String
  priceCurrency_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  count: Int
  count_not: Int
  count_in: [Int!]
  count_not_in: [Int!]
  count_lt: Int
  count_lte: Int
  count_gt: Int
  count_gte: Int
  AND: [OfferWhereInput!]
  OR: [OfferWhereInput!]
  NOT: [OfferWhereInput!]
}

input OfferWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  city(where: CityWhereUniqueInput!): City
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  claim(where: ClaimWhereUniqueInput!): Claim
  claims(where: ClaimWhereInput, orderBy: ClaimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Claim]!
  claimsConnection(where: ClaimWhereInput, orderBy: ClaimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClaimConnection!
  emailTemplate(where: EmailTemplateWhereUniqueInput!): EmailTemplate
  emailTemplates(where: EmailTemplateWhereInput, orderBy: EmailTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmailTemplate]!
  emailTemplatesConnection(where: EmailTemplateWhereInput, orderBy: EmailTemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmailTemplateConnection!
  invitation(where: InvitationWhereUniqueInput!): Invitation
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation]!
  invitationsConnection(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvitationConnection!
  offer(where: OfferWhereUniqueInput!): Offer
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer]!
  offersConnection(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  claims(where: ClaimWhereInput, orderBy: ClaimOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Claim!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  id: ID
  name: String!
  claims: ClaimCreateManyInput
}

input RoleCreateManyInput {
  create: [RoleCreateInput!]
  connect: [RoleWhereUniqueInput!]
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
}

input RoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [RoleScalarWhereInput!]
  OR: [RoleScalarWhereInput!]
  NOT: [RoleScalarWhereInput!]
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateDataInput {
  name: String
  claims: ClaimUpdateManyInput
}

input RoleUpdateInput {
  name: String
  claims: ClaimUpdateManyInput
}

input RoleUpdateManyDataInput {
  name: String
}

input RoleUpdateManyInput {
  create: [RoleCreateInput!]
  update: [RoleUpdateWithWhereUniqueNestedInput!]
  upsert: [RoleUpsertWithWhereUniqueNestedInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  set: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  deleteMany: [RoleScalarWhereInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
}

input RoleUpdateManyMutationInput {
  name: String
}

input RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput!
  data: RoleUpdateManyDataInput!
}

input RoleUpdateWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateDataInput!
}

input RoleUpsertWithWhereUniqueNestedInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateDataInput!
  create: RoleCreateInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  claims_every: ClaimWhereInput
  claims_some: ClaimWhereInput
  claims_none: ClaimWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  claim(where: ClaimSubscriptionWhereInput): ClaimSubscriptionPayload
  emailTemplate(where: EmailTemplateSubscriptionWhereInput): EmailTemplateSubscriptionPayload
  invitation(where: InvitationSubscriptionWhereInput): InvitationSubscriptionPayload
  offer(where: OfferSubscriptionWhereInput): OfferSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  identifier: String!
  identificationType: IdentificationType!
  password: String
  name: String
  city: City
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  identifier: String!
  identificationType: IdentificationType!
  password: String
  name: String
  city: CityCreateOneInput
  roles: RoleCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  identifier_ASC
  identifier_DESC
  identificationType_ASC
  identificationType_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  identifier: String!
  identificationType: IdentificationType!
  password: String
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  identifier: String
  identificationType: IdentificationType
  password: String
  name: String
  city: CityUpdateOneInput
  roles: RoleUpdateManyInput
}

input UserUpdateInput {
  identifier: String
  identificationType: IdentificationType
  password: String
  name: String
  city: CityUpdateOneInput
  roles: RoleUpdateManyInput
}

input UserUpdateManyMutationInput {
  identifier: String
  identificationType: IdentificationType
  password: String
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  identifier: String
  identifier_not: String
  identifier_in: [String!]
  identifier_not_in: [String!]
  identifier_lt: String
  identifier_lte: String
  identifier_gt: String
  identifier_gte: String
  identifier_contains: String
  identifier_not_contains: String
  identifier_starts_with: String
  identifier_not_starts_with: String
  identifier_ends_with: String
  identifier_not_ends_with: String
  identificationType: IdentificationType
  identificationType_not: IdentificationType
  identificationType_in: [IdentificationType!]
  identificationType_not_in: [IdentificationType!]
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  city: CityWhereInput
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  identifier: String
}
`