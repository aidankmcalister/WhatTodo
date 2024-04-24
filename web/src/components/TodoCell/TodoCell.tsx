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

import TodoList from 'src/components/TodoList'

import NewTodoDialog from '../NewTodoDialog/NewTodoDialog'

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

export const Empty = () => <div>Empty</div>

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
      <button
        className="mb-3 w-full cursor-pointer rounded-md border px-2 py-1 shadow-sm hover:bg-gray-200"
        onClick={() => {
          setNewTodoOpen((prev) => !prev)
        }}
      >
        New Todo
      </button>
      <NewTodoDialog open={newTodoOpen} setOpen={setNewTodoOpen} />
      <TodoList todoItems={sortedTodoList} />
    </div>
  )
}
