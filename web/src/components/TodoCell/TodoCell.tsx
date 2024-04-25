import { useState } from 'react'

import type {
  FindTodosByUserQuery,
  FindTodosByUserQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Button from 'src/components/Button/Button'
import NewTodoDialog from 'src/components/NewTodoDialog/NewTodoDialog'
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
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTodosByUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  todoItems,
}: CellSuccessProps<FindTodosByUserQuery, FindTodosByUserQueryVariables>) => {
  const [newTodoOpen, setNewTodoOpen] = useState(false)

  const sortedTodoList = [...todoItems]
    .sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
    .reverse()

  return (
    <div>
      <Button
        className="mb-3 h-10 w-full"
        onClick={() => {
          setNewTodoOpen((prev) => !prev)
        }}
      >
        Create New Todo
      </Button>
      <NewTodoDialog open={newTodoOpen} setOpen={setNewTodoOpen} />
      <TodoList todoItems={sortedTodoList} />
    </div>
  )
}
