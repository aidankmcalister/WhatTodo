export const schema = gql`
  type User {
    id: String!
    auth0id: String!
    name: String
    picture: String
    email: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
    userBySub(auth0id: String!): User @requireAuth
  }

  input CreateUserInput {
    auth0id: String!
    name: String
    picture: String
    email: String
  }

  input UpdateUserInput {
    name: String
    picture: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
