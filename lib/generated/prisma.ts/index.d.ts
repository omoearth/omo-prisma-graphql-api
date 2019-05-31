import { DocumentNode } from "graphql";
import { BaseClientOptions, Model } from "prisma-client-lib";
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export declare type Maybe<T> = T | undefined | null;
export interface Exists {
    city: (where?: CityWhereInput) => Promise<boolean>;
    claim: (where?: ClaimWhereInput) => Promise<boolean>;
    role: (where?: RoleWhereInput) => Promise<boolean>;
    user: (where?: UserWhereInput) => Promise<boolean>;
}
export interface Node {
}
export declare type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;
export interface Fragmentable {
    $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}
export interface Prisma {
    $exists: Exists;
    $graphql: <T = any>(query: string, variables?: {
        [key: string]: any;
    }) => Promise<T>;
    /**
     * Queries
     */
    city: (where: CityWhereUniqueInput) => CityNullablePromise;
    cities: (args?: {
        where?: CityWhereInput;
        orderBy?: CityOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<City>;
    citiesConnection: (args?: {
        where?: CityWhereInput;
        orderBy?: CityOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => CityConnectionPromise;
    claim: (where: ClaimWhereUniqueInput) => ClaimNullablePromise;
    claims: (args?: {
        where?: ClaimWhereInput;
        orderBy?: ClaimOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Claim>;
    claimsConnection: (args?: {
        where?: ClaimWhereInput;
        orderBy?: ClaimOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => ClaimConnectionPromise;
    role: (where: RoleWhereUniqueInput) => RoleNullablePromise;
    roles: (args?: {
        where?: RoleWhereInput;
        orderBy?: RoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<Role>;
    rolesConnection: (args?: {
        where?: RoleWhereInput;
        orderBy?: RoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => RoleConnectionPromise;
    user: (where: UserWhereUniqueInput) => UserNullablePromise;
    users: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => FragmentableArray<User>;
    usersConnection: (args?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => UserConnectionPromise;
    node: (args: {
        id: ID_Output;
    }) => Node;
    /**
     * Mutations
     */
    createCity: (data: CityCreateInput) => CityPromise;
    updateCity: (args: {
        data: CityUpdateInput;
        where: CityWhereUniqueInput;
    }) => CityPromise;
    updateManyCities: (args: {
        data: CityUpdateManyMutationInput;
        where?: CityWhereInput;
    }) => BatchPayloadPromise;
    upsertCity: (args: {
        where: CityWhereUniqueInput;
        create: CityCreateInput;
        update: CityUpdateInput;
    }) => CityPromise;
    deleteCity: (where: CityWhereUniqueInput) => CityPromise;
    deleteManyCities: (where?: CityWhereInput) => BatchPayloadPromise;
    createClaim: (data: ClaimCreateInput) => ClaimPromise;
    updateClaim: (args: {
        data: ClaimUpdateInput;
        where: ClaimWhereUniqueInput;
    }) => ClaimPromise;
    updateManyClaims: (args: {
        data: ClaimUpdateManyMutationInput;
        where?: ClaimWhereInput;
    }) => BatchPayloadPromise;
    upsertClaim: (args: {
        where: ClaimWhereUniqueInput;
        create: ClaimCreateInput;
        update: ClaimUpdateInput;
    }) => ClaimPromise;
    deleteClaim: (where: ClaimWhereUniqueInput) => ClaimPromise;
    deleteManyClaims: (where?: ClaimWhereInput) => BatchPayloadPromise;
    createRole: (data: RoleCreateInput) => RolePromise;
    updateRole: (args: {
        data: RoleUpdateInput;
        where: RoleWhereUniqueInput;
    }) => RolePromise;
    updateManyRoles: (args: {
        data: RoleUpdateManyMutationInput;
        where?: RoleWhereInput;
    }) => BatchPayloadPromise;
    upsertRole: (args: {
        where: RoleWhereUniqueInput;
        create: RoleCreateInput;
        update: RoleUpdateInput;
    }) => RolePromise;
    deleteRole: (where: RoleWhereUniqueInput) => RolePromise;
    deleteManyRoles: (where?: RoleWhereInput) => BatchPayloadPromise;
    createUser: (data: UserCreateInput) => UserPromise;
    updateUser: (args: {
        data: UserUpdateInput;
        where: UserWhereUniqueInput;
    }) => UserPromise;
    updateManyUsers: (args: {
        data: UserUpdateManyMutationInput;
        where?: UserWhereInput;
    }) => BatchPayloadPromise;
    upsertUser: (args: {
        where: UserWhereUniqueInput;
        create: UserCreateInput;
        update: UserUpdateInput;
    }) => UserPromise;
    deleteUser: (where: UserWhereUniqueInput) => UserPromise;
    deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
    /**
     * Subscriptions
     */
    $subscribe: Subscription;
}
export interface Subscription {
    city: (where?: CitySubscriptionWhereInput) => CitySubscriptionPayloadSubscription;
    claim: (where?: ClaimSubscriptionWhereInput) => ClaimSubscriptionPayloadSubscription;
    role: (where?: RoleSubscriptionWhereInput) => RoleSubscriptionPayloadSubscription;
    user: (where?: UserSubscriptionWhereInput) => UserSubscriptionPayloadSubscription;
}
export interface ClientConstructor<T> {
    new (options?: BaseClientOptions): T;
}
/**
 * Types
 */
export declare type CityOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "available_ASC" | "available_DESC" | "votes_ASC" | "votes_DESC";
export declare type ClaimOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "description_ASC" | "description_DESC";
export declare type RoleOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";
export declare type UserOrderByInput = "id_ASC" | "id_DESC" | "email_ASC" | "email_DESC" | "password_ASC" | "password_DESC" | "name_ASC" | "name_DESC";
export declare type MutationType = "CREATED" | "UPDATED" | "DELETED";
export interface ClaimUpdateInput {
    name?: Maybe<String>;
    description?: Maybe<String>;
}
export declare type CityWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    name?: Maybe<String>;
}>;
export interface RoleUpdateInput {
    name?: Maybe<String>;
    claims?: Maybe<ClaimUpdateManyInput>;
}
export interface CityWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    available?: Maybe<Boolean>;
    available_not?: Maybe<Boolean>;
    votes?: Maybe<Int>;
    votes_not?: Maybe<Int>;
    votes_in?: Maybe<Int[] | Int>;
    votes_not_in?: Maybe<Int[] | Int>;
    votes_lt?: Maybe<Int>;
    votes_lte?: Maybe<Int>;
    votes_gt?: Maybe<Int>;
    votes_gte?: Maybe<Int>;
    AND?: Maybe<CityWhereInput[] | CityWhereInput>;
    OR?: Maybe<CityWhereInput[] | CityWhereInput>;
    NOT?: Maybe<CityWhereInput[] | CityWhereInput>;
}
export interface CityUpdateDataInput {
    name?: Maybe<String>;
    available?: Maybe<Boolean>;
    votes?: Maybe<Int>;
}
export interface ClaimUpdateManyWithWhereNestedInput {
    where: ClaimScalarWhereInput;
    data: ClaimUpdateManyDataInput;
}
export interface CityUpdateOneInput {
    create?: Maybe<CityCreateInput>;
    update?: Maybe<CityUpdateDataInput>;
    upsert?: Maybe<CityUpsertNestedInput>;
    delete?: Maybe<Boolean>;
    disconnect?: Maybe<Boolean>;
    connect?: Maybe<CityWhereUniqueInput>;
}
export interface ClaimUpdateManyInput {
    create?: Maybe<ClaimCreateInput[] | ClaimCreateInput>;
    update?: Maybe<ClaimUpdateWithWhereUniqueNestedInput[] | ClaimUpdateWithWhereUniqueNestedInput>;
    upsert?: Maybe<ClaimUpsertWithWhereUniqueNestedInput[] | ClaimUpsertWithWhereUniqueNestedInput>;
    delete?: Maybe<ClaimWhereUniqueInput[] | ClaimWhereUniqueInput>;
    connect?: Maybe<ClaimWhereUniqueInput[] | ClaimWhereUniqueInput>;
    set?: Maybe<ClaimWhereUniqueInput[] | ClaimWhereUniqueInput>;
    disconnect?: Maybe<ClaimWhereUniqueInput[] | ClaimWhereUniqueInput>;
    deleteMany?: Maybe<ClaimScalarWhereInput[] | ClaimScalarWhereInput>;
    updateMany?: Maybe<ClaimUpdateManyWithWhereNestedInput[] | ClaimUpdateManyWithWhereNestedInput>;
}
export interface UserUpdateInput {
    email?: Maybe<String>;
    password?: Maybe<String>;
    name?: Maybe<String>;
    city?: Maybe<CityUpdateOneInput>;
    roles?: Maybe<RoleUpdateManyInput>;
}
export declare type ClaimWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    name?: Maybe<String>;
}>;
export interface ClaimWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    description?: Maybe<String>;
    description_not?: Maybe<String>;
    description_in?: Maybe<String[] | String>;
    description_not_in?: Maybe<String[] | String>;
    description_lt?: Maybe<String>;
    description_lte?: Maybe<String>;
    description_gt?: Maybe<String>;
    description_gte?: Maybe<String>;
    description_contains?: Maybe<String>;
    description_not_contains?: Maybe<String>;
    description_starts_with?: Maybe<String>;
    description_not_starts_with?: Maybe<String>;
    description_ends_with?: Maybe<String>;
    description_not_ends_with?: Maybe<String>;
    AND?: Maybe<ClaimWhereInput[] | ClaimWhereInput>;
    OR?: Maybe<ClaimWhereInput[] | ClaimWhereInput>;
    NOT?: Maybe<ClaimWhereInput[] | ClaimWhereInput>;
}
export interface CitySubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<CityWhereInput>;
    AND?: Maybe<CitySubscriptionWhereInput[] | CitySubscriptionWhereInput>;
    OR?: Maybe<CitySubscriptionWhereInput[] | CitySubscriptionWhereInput>;
    NOT?: Maybe<CitySubscriptionWhereInput[] | CitySubscriptionWhereInput>;
}
export interface CityCreateInput {
    id?: Maybe<ID_Input>;
    name: String;
    available: Boolean;
    votes?: Maybe<Int>;
}
export interface RoleUpdateManyDataInput {
    name?: Maybe<String>;
}
export interface CityUpdateInput {
    name?: Maybe<String>;
    available?: Maybe<Boolean>;
    votes?: Maybe<Int>;
}
export interface RoleUpdateManyWithWhereNestedInput {
    where: RoleScalarWhereInput;
    data: RoleUpdateManyDataInput;
}
export interface CityUpdateManyMutationInput {
    name?: Maybe<String>;
    available?: Maybe<Boolean>;
    votes?: Maybe<Int>;
}
export interface RoleScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    AND?: Maybe<RoleScalarWhereInput[] | RoleScalarWhereInput>;
    OR?: Maybe<RoleScalarWhereInput[] | RoleScalarWhereInput>;
    NOT?: Maybe<RoleScalarWhereInput[] | RoleScalarWhereInput>;
}
export interface RoleCreateManyInput {
    create?: Maybe<RoleCreateInput[] | RoleCreateInput>;
    connect?: Maybe<RoleWhereUniqueInput[] | RoleWhereUniqueInput>;
}
export interface RoleUpdateDataInput {
    name?: Maybe<String>;
    claims?: Maybe<ClaimUpdateManyInput>;
}
export interface CityCreateOneInput {
    create?: Maybe<CityCreateInput>;
    connect?: Maybe<CityWhereUniqueInput>;
}
export declare type UserWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    email?: Maybe<String>;
}>;
export interface ClaimCreateInput {
    id?: Maybe<ID_Input>;
    name: String;
    description?: Maybe<String>;
}
export interface UserWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    email?: Maybe<String>;
    email_not?: Maybe<String>;
    email_in?: Maybe<String[] | String>;
    email_not_in?: Maybe<String[] | String>;
    email_lt?: Maybe<String>;
    email_lte?: Maybe<String>;
    email_gt?: Maybe<String>;
    email_gte?: Maybe<String>;
    email_contains?: Maybe<String>;
    email_not_contains?: Maybe<String>;
    email_starts_with?: Maybe<String>;
    email_not_starts_with?: Maybe<String>;
    email_ends_with?: Maybe<String>;
    email_not_ends_with?: Maybe<String>;
    password?: Maybe<String>;
    password_not?: Maybe<String>;
    password_in?: Maybe<String[] | String>;
    password_not_in?: Maybe<String[] | String>;
    password_lt?: Maybe<String>;
    password_lte?: Maybe<String>;
    password_gt?: Maybe<String>;
    password_gte?: Maybe<String>;
    password_contains?: Maybe<String>;
    password_not_contains?: Maybe<String>;
    password_starts_with?: Maybe<String>;
    password_not_starts_with?: Maybe<String>;
    password_ends_with?: Maybe<String>;
    password_not_ends_with?: Maybe<String>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    city?: Maybe<CityWhereInput>;
    roles_every?: Maybe<RoleWhereInput>;
    roles_some?: Maybe<RoleWhereInput>;
    roles_none?: Maybe<RoleWhereInput>;
    AND?: Maybe<UserWhereInput[] | UserWhereInput>;
    OR?: Maybe<UserWhereInput[] | UserWhereInput>;
    NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}
export interface UserCreateInput {
    id?: Maybe<ID_Input>;
    email: String;
    password?: Maybe<String>;
    name?: Maybe<String>;
    city?: Maybe<CityCreateOneInput>;
    roles?: Maybe<RoleCreateManyInput>;
}
export interface UserSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<UserWhereInput>;
    AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
    OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
    NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}
export interface ClaimUpdateManyMutationInput {
    name?: Maybe<String>;
    description?: Maybe<String>;
}
export interface ClaimSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<ClaimWhereInput>;
    AND?: Maybe<ClaimSubscriptionWhereInput[] | ClaimSubscriptionWhereInput>;
    OR?: Maybe<ClaimSubscriptionWhereInput[] | ClaimSubscriptionWhereInput>;
    NOT?: Maybe<ClaimSubscriptionWhereInput[] | ClaimSubscriptionWhereInput>;
}
export interface RoleCreateInput {
    id?: Maybe<ID_Input>;
    name: String;
    claims?: Maybe<ClaimCreateManyInput>;
}
export declare type RoleWhereUniqueInput = AtLeastOne<{
    id: Maybe<ID_Input>;
    name?: Maybe<String>;
}>;
export interface ClaimCreateManyInput {
    create?: Maybe<ClaimCreateInput[] | ClaimCreateInput>;
    connect?: Maybe<ClaimWhereUniqueInput[] | ClaimWhereUniqueInput>;
}
export interface RoleUpsertWithWhereUniqueNestedInput {
    where: RoleWhereUniqueInput;
    update: RoleUpdateDataInput;
    create: RoleCreateInput;
}
export interface RoleUpdateManyMutationInput {
    name?: Maybe<String>;
}
export interface RoleUpdateManyInput {
    create?: Maybe<RoleCreateInput[] | RoleCreateInput>;
    update?: Maybe<RoleUpdateWithWhereUniqueNestedInput[] | RoleUpdateWithWhereUniqueNestedInput>;
    upsert?: Maybe<RoleUpsertWithWhereUniqueNestedInput[] | RoleUpsertWithWhereUniqueNestedInput>;
    delete?: Maybe<RoleWhereUniqueInput[] | RoleWhereUniqueInput>;
    connect?: Maybe<RoleWhereUniqueInput[] | RoleWhereUniqueInput>;
    set?: Maybe<RoleWhereUniqueInput[] | RoleWhereUniqueInput>;
    disconnect?: Maybe<RoleWhereUniqueInput[] | RoleWhereUniqueInput>;
    deleteMany?: Maybe<RoleScalarWhereInput[] | RoleScalarWhereInput>;
    updateMany?: Maybe<RoleUpdateManyWithWhereNestedInput[] | RoleUpdateManyWithWhereNestedInput>;
}
export interface ClaimUpdateManyDataInput {
    name?: Maybe<String>;
    description?: Maybe<String>;
}
export interface RoleSubscriptionWhereInput {
    mutation_in?: Maybe<MutationType[] | MutationType>;
    updatedFields_contains?: Maybe<String>;
    updatedFields_contains_every?: Maybe<String[] | String>;
    updatedFields_contains_some?: Maybe<String[] | String>;
    node?: Maybe<RoleWhereInput>;
    AND?: Maybe<RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput>;
    OR?: Maybe<RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput>;
    NOT?: Maybe<RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput>;
}
export interface ClaimScalarWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    description?: Maybe<String>;
    description_not?: Maybe<String>;
    description_in?: Maybe<String[] | String>;
    description_not_in?: Maybe<String[] | String>;
    description_lt?: Maybe<String>;
    description_lte?: Maybe<String>;
    description_gt?: Maybe<String>;
    description_gte?: Maybe<String>;
    description_contains?: Maybe<String>;
    description_not_contains?: Maybe<String>;
    description_starts_with?: Maybe<String>;
    description_not_starts_with?: Maybe<String>;
    description_ends_with?: Maybe<String>;
    description_not_ends_with?: Maybe<String>;
    AND?: Maybe<ClaimScalarWhereInput[] | ClaimScalarWhereInput>;
    OR?: Maybe<ClaimScalarWhereInput[] | ClaimScalarWhereInput>;
    NOT?: Maybe<ClaimScalarWhereInput[] | ClaimScalarWhereInput>;
}
export interface ClaimUpsertWithWhereUniqueNestedInput {
    where: ClaimWhereUniqueInput;
    update: ClaimUpdateDataInput;
    create: ClaimCreateInput;
}
export interface ClaimUpdateDataInput {
    name?: Maybe<String>;
    description?: Maybe<String>;
}
export interface ClaimUpdateWithWhereUniqueNestedInput {
    where: ClaimWhereUniqueInput;
    data: ClaimUpdateDataInput;
}
export interface UserUpdateManyMutationInput {
    email?: Maybe<String>;
    password?: Maybe<String>;
    name?: Maybe<String>;
}
export interface CityUpsertNestedInput {
    update: CityUpdateDataInput;
    create: CityCreateInput;
}
export interface RoleUpdateWithWhereUniqueNestedInput {
    where: RoleWhereUniqueInput;
    data: RoleUpdateDataInput;
}
export interface RoleWhereInput {
    id?: Maybe<ID_Input>;
    id_not?: Maybe<ID_Input>;
    id_in?: Maybe<ID_Input[] | ID_Input>;
    id_not_in?: Maybe<ID_Input[] | ID_Input>;
    id_lt?: Maybe<ID_Input>;
    id_lte?: Maybe<ID_Input>;
    id_gt?: Maybe<ID_Input>;
    id_gte?: Maybe<ID_Input>;
    id_contains?: Maybe<ID_Input>;
    id_not_contains?: Maybe<ID_Input>;
    id_starts_with?: Maybe<ID_Input>;
    id_not_starts_with?: Maybe<ID_Input>;
    id_ends_with?: Maybe<ID_Input>;
    id_not_ends_with?: Maybe<ID_Input>;
    name?: Maybe<String>;
    name_not?: Maybe<String>;
    name_in?: Maybe<String[] | String>;
    name_not_in?: Maybe<String[] | String>;
    name_lt?: Maybe<String>;
    name_lte?: Maybe<String>;
    name_gt?: Maybe<String>;
    name_gte?: Maybe<String>;
    name_contains?: Maybe<String>;
    name_not_contains?: Maybe<String>;
    name_starts_with?: Maybe<String>;
    name_not_starts_with?: Maybe<String>;
    name_ends_with?: Maybe<String>;
    name_not_ends_with?: Maybe<String>;
    claims_every?: Maybe<ClaimWhereInput>;
    claims_some?: Maybe<ClaimWhereInput>;
    claims_none?: Maybe<ClaimWhereInput>;
    AND?: Maybe<RoleWhereInput[] | RoleWhereInput>;
    OR?: Maybe<RoleWhereInput[] | RoleWhereInput>;
    NOT?: Maybe<RoleWhereInput[] | RoleWhereInput>;
}
export interface NodeNode {
    id: ID_Output;
}
export interface UserPreviousValues {
    id: ID_Output;
    email: String;
    password?: String;
    name?: String;
}
export interface UserPreviousValuesPromise extends Promise<UserPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    email: () => Promise<String>;
    password: () => Promise<String>;
    name: () => Promise<String>;
}
export interface UserPreviousValuesSubscription extends Promise<AsyncIterator<UserPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    email: () => Promise<AsyncIterator<String>>;
    password: () => Promise<AsyncIterator<String>>;
    name: () => Promise<AsyncIterator<String>>;
}
export interface AggregateClaim {
    count: Int;
}
export interface AggregateClaimPromise extends Promise<AggregateClaim>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateClaimSubscription extends Promise<AsyncIterator<AggregateClaim>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface PageInfo {
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor?: String;
    endCursor?: String;
}
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
    hasNextPage: () => Promise<Boolean>;
    hasPreviousPage: () => Promise<Boolean>;
    startCursor: () => Promise<String>;
    endCursor: () => Promise<String>;
}
export interface PageInfoSubscription extends Promise<AsyncIterator<PageInfo>>, Fragmentable {
    hasNextPage: () => Promise<AsyncIterator<Boolean>>;
    hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
    startCursor: () => Promise<AsyncIterator<String>>;
    endCursor: () => Promise<AsyncIterator<String>>;
}
export interface ClaimEdge {
    node: Claim;
    cursor: String;
}
export interface ClaimEdgePromise extends Promise<ClaimEdge>, Fragmentable {
    node: <T = ClaimPromise>() => T;
    cursor: () => Promise<String>;
}
export interface ClaimEdgeSubscription extends Promise<AsyncIterator<ClaimEdge>>, Fragmentable {
    node: <T = ClaimSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface CityEdge {
    node: City;
    cursor: String;
}
export interface CityEdgePromise extends Promise<CityEdge>, Fragmentable {
    node: <T = CityPromise>() => T;
    cursor: () => Promise<String>;
}
export interface CityEdgeSubscription extends Promise<AsyncIterator<CityEdge>>, Fragmentable {
    node: <T = CitySubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface ClaimConnection {
    pageInfo: PageInfo;
    edges: ClaimEdge[];
}
export interface ClaimConnectionPromise extends Promise<ClaimConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<ClaimEdge>>() => T;
    aggregate: <T = AggregateClaimPromise>() => T;
}
export interface ClaimConnectionSubscription extends Promise<AsyncIterator<ClaimConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<ClaimEdgeSubscription>>>() => T;
    aggregate: <T = AggregateClaimSubscription>() => T;
}
export interface BatchPayload {
    count: Long;
}
export interface BatchPayloadPromise extends Promise<BatchPayload>, Fragmentable {
    count: () => Promise<Long>;
}
export interface BatchPayloadSubscription extends Promise<AsyncIterator<BatchPayload>>, Fragmentable {
    count: () => Promise<AsyncIterator<Long>>;
}
export interface AggregateCity {
    count: Int;
}
export interface AggregateCityPromise extends Promise<AggregateCity>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateCitySubscription extends Promise<AsyncIterator<AggregateCity>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface RoleSubscriptionPayload {
    mutation: MutationType;
    node: Role;
    updatedFields: String[];
    previousValues: RolePreviousValues;
}
export interface RoleSubscriptionPayloadPromise extends Promise<RoleSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = RolePromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = RolePreviousValuesPromise>() => T;
}
export interface RoleSubscriptionPayloadSubscription extends Promise<AsyncIterator<RoleSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = RoleSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = RolePreviousValuesSubscription>() => T;
}
export interface AggregateUser {
    count: Int;
}
export interface AggregateUserPromise extends Promise<AggregateUser>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateUserSubscription extends Promise<AsyncIterator<AggregateUser>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export interface UserEdge {
    node: User;
    cursor: String;
}
export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
    node: <T = UserPromise>() => T;
    cursor: () => Promise<String>;
}
export interface UserEdgeSubscription extends Promise<AsyncIterator<UserEdge>>, Fragmentable {
    node: <T = UserSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface UserConnection {
    pageInfo: PageInfo;
    edges: UserEdge[];
}
export interface UserConnectionPromise extends Promise<UserConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<UserEdge>>() => T;
    aggregate: <T = AggregateUserPromise>() => T;
}
export interface UserConnectionSubscription extends Promise<AsyncIterator<UserConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
    aggregate: <T = AggregateUserSubscription>() => T;
}
export interface User {
    id: ID_Output;
    email: String;
    password?: String;
    name?: String;
}
export interface UserPromise extends Promise<User>, Fragmentable {
    id: () => Promise<ID_Output>;
    email: () => Promise<String>;
    password: () => Promise<String>;
    name: () => Promise<String>;
    city: <T = CityPromise>() => T;
    roles: <T = FragmentableArray<Role>>(args?: {
        where?: RoleWhereInput;
        orderBy?: RoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface UserSubscription extends Promise<AsyncIterator<User>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    email: () => Promise<AsyncIterator<String>>;
    password: () => Promise<AsyncIterator<String>>;
    name: () => Promise<AsyncIterator<String>>;
    city: <T = CitySubscription>() => T;
    roles: <T = Promise<AsyncIterator<RoleSubscription>>>(args?: {
        where?: RoleWhereInput;
        orderBy?: RoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface UserNullablePromise extends Promise<User | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    email: () => Promise<String>;
    password: () => Promise<String>;
    name: () => Promise<String>;
    city: <T = CityPromise>() => T;
    roles: <T = FragmentableArray<Role>>(args?: {
        where?: RoleWhereInput;
        orderBy?: RoleOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface CitySubscriptionPayload {
    mutation: MutationType;
    node: City;
    updatedFields: String[];
    previousValues: CityPreviousValues;
}
export interface CitySubscriptionPayloadPromise extends Promise<CitySubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = CityPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = CityPreviousValuesPromise>() => T;
}
export interface CitySubscriptionPayloadSubscription extends Promise<AsyncIterator<CitySubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = CitySubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = CityPreviousValuesSubscription>() => T;
}
export interface RoleEdge {
    node: Role;
    cursor: String;
}
export interface RoleEdgePromise extends Promise<RoleEdge>, Fragmentable {
    node: <T = RolePromise>() => T;
    cursor: () => Promise<String>;
}
export interface RoleEdgeSubscription extends Promise<AsyncIterator<RoleEdge>>, Fragmentable {
    node: <T = RoleSubscription>() => T;
    cursor: () => Promise<AsyncIterator<String>>;
}
export interface CityPreviousValues {
    id: ID_Output;
    name: String;
    available: Boolean;
    votes?: Int;
}
export interface CityPreviousValuesPromise extends Promise<CityPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    available: () => Promise<Boolean>;
    votes: () => Promise<Int>;
}
export interface CityPreviousValuesSubscription extends Promise<AsyncIterator<CityPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    available: () => Promise<AsyncIterator<Boolean>>;
    votes: () => Promise<AsyncIterator<Int>>;
}
export interface UserSubscriptionPayload {
    mutation: MutationType;
    node: User;
    updatedFields: String[];
    previousValues: UserPreviousValues;
}
export interface UserSubscriptionPayloadPromise extends Promise<UserSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = UserPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = UserPreviousValuesPromise>() => T;
}
export interface UserSubscriptionPayloadSubscription extends Promise<AsyncIterator<UserSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = UserSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = UserPreviousValuesSubscription>() => T;
}
export interface CityConnection {
    pageInfo: PageInfo;
    edges: CityEdge[];
}
export interface CityConnectionPromise extends Promise<CityConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<CityEdge>>() => T;
    aggregate: <T = AggregateCityPromise>() => T;
}
export interface CityConnectionSubscription extends Promise<AsyncIterator<CityConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<CityEdgeSubscription>>>() => T;
    aggregate: <T = AggregateCitySubscription>() => T;
}
export interface Claim {
    id: ID_Output;
    name: String;
    description?: String;
}
export interface ClaimPromise extends Promise<Claim>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    description: () => Promise<String>;
}
export interface ClaimSubscription extends Promise<AsyncIterator<Claim>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    description: () => Promise<AsyncIterator<String>>;
}
export interface ClaimNullablePromise extends Promise<Claim | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    description: () => Promise<String>;
}
export interface ClaimPreviousValues {
    id: ID_Output;
    name: String;
    description?: String;
}
export interface ClaimPreviousValuesPromise extends Promise<ClaimPreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    description: () => Promise<String>;
}
export interface ClaimPreviousValuesSubscription extends Promise<AsyncIterator<ClaimPreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    description: () => Promise<AsyncIterator<String>>;
}
export interface ClaimSubscriptionPayload {
    mutation: MutationType;
    node: Claim;
    updatedFields: String[];
    previousValues: ClaimPreviousValues;
}
export interface ClaimSubscriptionPayloadPromise extends Promise<ClaimSubscriptionPayload>, Fragmentable {
    mutation: () => Promise<MutationType>;
    node: <T = ClaimPromise>() => T;
    updatedFields: () => Promise<String[]>;
    previousValues: <T = ClaimPreviousValuesPromise>() => T;
}
export interface ClaimSubscriptionPayloadSubscription extends Promise<AsyncIterator<ClaimSubscriptionPayload>>, Fragmentable {
    mutation: () => Promise<AsyncIterator<MutationType>>;
    node: <T = ClaimSubscription>() => T;
    updatedFields: () => Promise<AsyncIterator<String[]>>;
    previousValues: <T = ClaimPreviousValuesSubscription>() => T;
}
export interface RolePreviousValues {
    id: ID_Output;
    name: String;
}
export interface RolePreviousValuesPromise extends Promise<RolePreviousValues>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
}
export interface RolePreviousValuesSubscription extends Promise<AsyncIterator<RolePreviousValues>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
}
export interface City {
    id: ID_Output;
    name: String;
    available: Boolean;
    votes?: Int;
}
export interface CityPromise extends Promise<City>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    available: () => Promise<Boolean>;
    votes: () => Promise<Int>;
}
export interface CitySubscription extends Promise<AsyncIterator<City>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    available: () => Promise<AsyncIterator<Boolean>>;
    votes: () => Promise<AsyncIterator<Int>>;
}
export interface CityNullablePromise extends Promise<City | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    available: () => Promise<Boolean>;
    votes: () => Promise<Int>;
}
export interface Role {
    id: ID_Output;
    name: String;
}
export interface RolePromise extends Promise<Role>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    claims: <T = FragmentableArray<Claim>>(args?: {
        where?: ClaimWhereInput;
        orderBy?: ClaimOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface RoleSubscription extends Promise<AsyncIterator<Role>>, Fragmentable {
    id: () => Promise<AsyncIterator<ID_Output>>;
    name: () => Promise<AsyncIterator<String>>;
    claims: <T = Promise<AsyncIterator<ClaimSubscription>>>(args?: {
        where?: ClaimWhereInput;
        orderBy?: ClaimOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface RoleNullablePromise extends Promise<Role | null>, Fragmentable {
    id: () => Promise<ID_Output>;
    name: () => Promise<String>;
    claims: <T = FragmentableArray<Claim>>(args?: {
        where?: ClaimWhereInput;
        orderBy?: ClaimOrderByInput;
        skip?: Int;
        after?: String;
        before?: String;
        first?: Int;
        last?: Int;
    }) => T;
}
export interface RoleConnection {
    pageInfo: PageInfo;
    edges: RoleEdge[];
}
export interface RoleConnectionPromise extends Promise<RoleConnection>, Fragmentable {
    pageInfo: <T = PageInfoPromise>() => T;
    edges: <T = FragmentableArray<RoleEdge>>() => T;
    aggregate: <T = AggregateRolePromise>() => T;
}
export interface RoleConnectionSubscription extends Promise<AsyncIterator<RoleConnection>>, Fragmentable {
    pageInfo: <T = PageInfoSubscription>() => T;
    edges: <T = Promise<AsyncIterator<RoleEdgeSubscription>>>() => T;
    aggregate: <T = AggregateRoleSubscription>() => T;
}
export interface AggregateRole {
    count: Int;
}
export interface AggregateRolePromise extends Promise<AggregateRole>, Fragmentable {
    count: () => Promise<Int>;
}
export interface AggregateRoleSubscription extends Promise<AsyncIterator<AggregateRole>>, Fragmentable {
    count: () => Promise<AsyncIterator<Int>>;
}
export declare type String = string;
export declare type ID_Input = string | number;
export declare type ID_Output = string;
export declare type Boolean = boolean;
export declare type Long = string;
export declare type Int = number;
/**
 * Model Metadata
 */
export declare const models: Model[];
/**
 * Type Defs
 */
export declare const Prisma: ClientConstructor<Prisma>;
export declare const prisma: Prisma;
