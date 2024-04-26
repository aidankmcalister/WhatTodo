import { useState } from 'react'

import { FunnelIcon } from '@heroicons/react/24/outline'
import { lineWobble } from 'ldrs'
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
import FilterMenuDialog from 'src/components/FilterMenuDialog/FilterMenuDialog'
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
lineWobble.register()

export const Loading = () => (
  <l-line-wobble size="150" speed="2.5" color={'#D92525'}></l-line-wobble>
)

export const Failure = ({
  error,
}: CellFailureProps<FindTodosByUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  todoItems,
}: CellSuccessProps<FindTodosByUserQuery, FindTodosByUserQueryVariables>) => {
  const [newTodoOpen, setNewTodoOpen] = useState(false)
  const [openFilterMenu, setOpenFilterMenu] = useState(false)

  const sortedTodoList = [...todoItems]
    .sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
    .reverse()

  return (
    <div>
      <div className="flex space-x-3">
        <Button
          className="mb-3 h-10 w-full"
          onClick={() => {
            setNewTodoOpen((prev) => !prev)
          }}
        >
          Create New Todo
        </Button>
        <button
          className="mb-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-main-red font-medium text-white shadow-sm hover:bg-gray-200 hover:bg-main-red/90"
          onClick={() => {
            setOpenFilterMenu((prev) => !prev)
          }}
        >
          <FunnelIcon className="h-5" />
        </button>
      </div>
      <NewTodoDialog open={newTodoOpen} setOpen={setNewTodoOpen} />
      <FilterMenuDialog open={openFilterMenu} setOpen={setOpenFilterMenu} />
      <TodoList todoItems={sortedTodoList} />
    </div>
  )
}
