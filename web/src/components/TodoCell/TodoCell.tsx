import type {
  FindTodosByUserQuery,
  FindTodosByUserQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import TodoList from 'src/components/TodoList'

export const QUERY: TypedDocumentNode<
  FindTodosByUserQuery,
  FindTodosByUserQueryVariables
> = gql`
  query FindTodosByUserQuery {
    todoItems: todoItemsByUser {
      id
      title
      completed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTodosByUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  todoItems,
}: CellSuccessProps<FindTodosByUserQuery, FindTodosByUserQueryVariables>) => {
  return (
    <div>
      <TodoList todoItems={todoItems} />
    </div>
  )
}
