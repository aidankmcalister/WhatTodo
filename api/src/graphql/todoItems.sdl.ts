export const schema = gql`
  type TodoItem {
    id: String!
    title: String!
    completed: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    userId: String!
  }

  type Query {
    todoItems: [TodoItem!]! @requireAuth
    todoItem(id: String!): TodoItem @requireAuth
  }

  input CreateTodoItemInput {
    title: String!
    completed: Boolean!
    userId: String!
  }

  input UpdateTodoItemInput {
    title: String
    completed: Boolean
    userId: String
  }

  type Mutation {
    createTodoItem(input: CreateTodoItemInput!): TodoItem! @requireAuth
    updateTodoItem(id: String!, input: UpdateTodoItemInput!): TodoItem!
      @requireAuth
    deleteTodoItem(id: String!): TodoItem! @requireAuth
  }
`
