import type { FindTodoQuery, FindTodoQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindTodoQuery,
  FindTodoQueryVariables
> = gql`
  query FindTodoQuery($id: Int!) {
    todo: todo(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTodoQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  todo,
}: CellSuccessProps<FindTodoQuery, FindTodoQueryVariables>) => {
  return <div>{JSON.stringify(todo)}</div>
}
