export const schema = gql`
  type TodoItem {
    id: String!
    title: String!
    description: String
    priority: Int!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    userId: String!
  }

  type Query {
    todoItems: [TodoItem!]! @requireAuth
    todoItemsByUser: [TodoItem!] @requireAuth
    todoItem(id: String!): TodoItem @requireAuth
  }

  input CreateTodoItemInput {
    title: String!
    description: String
    priority: Int!
    userId: String!
  }

  input UpdateTodoItemInput {
    title: String
    description: String
    completed: Boolean
    priority: Int
    userId: String
  }

  type Mutation {
    createTodoItem(input: CreateTodoItemInput!): TodoItem! @requireAuth
    updateTodoItem(id: String!, input: UpdateTodoItemInput!): TodoItem!
      @requireAuth
    deleteTodoItem(id: String!): TodoItem! @requireAuth
  }
`
