/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'

import { TrashIcon } from '@heroicons/react/24/solid'
import { format } from 'date-fns'

import { useMutation } from '@redwoodjs/web'

export const DELETE_TODO_ITEM_MUTATION = gql`
  mutation DeleteTodoItemMutation($id: String!) {
    deleteTodoItem(id: $id) {
      id
    }
  }
`

export const UPDATE_TODO_ITEM_MUTATION = gql`
  mutation UpdateTodoItemMutation($id: String!, $completed: Boolean!) {
    updateTodoItem(id: $id, input: { completed: $completed }) {
      id
      title
      completed
    }
  }
`

const TodoItem = ({ item }) => {
  const [completed, setCompleted] = useState(item.completed)
  const [updateTodoItem] = useMutation(UPDATE_TODO_ITEM_MUTATION, {
    onError: (error) => console.error('Error updating todo item:', error),
    refetchQueries: ['FindTodosByUserQuery'],
  })
  const [deleteTodoItem] = useMutation(DELETE_TODO_ITEM_MUTATION, {
    onError: (error) => console.error('Error deleting todo item:', error),
    refetchQueries: ['FindTodosByUserQuery'],
  })

  const handleCheckboxClick = async () => {
    const newCompleted = !completed
    setCompleted(newCompleted)
    try {
      await updateTodoItem({
        variables: { id: item.id, completed: newCompleted },
      })
    } catch (error) {
      console.error('Error updating todo item:', error)
      setCompleted(!newCompleted)
    }
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    event.preventDefault()
    deleteTodoItem({
      variables: {
        id: item.id,
      },
    })
  }

  return (
    <li className="rounded-md dark:bg-gray-800">
      <label className="flex w-full cursor-pointer space-x-3 rounded-md border p-5 shadow-sm dark:border-gray-700">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxClick}
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="font-medium dark:text-gray-300">{item.title}</p>
            <p className="text-sm text-gray-500">
              {format(item.createdAt, 'PP')}
            </p>
          </div>
          <TrashIcon
            className="w-9 rounded-full p-1.5 hover:bg-main-red/20 hover:text-main-red/80 dark:text-gray-300 dark:hover:bg-main-red/20"
            onClick={handleDelete}
          />
        </div>
      </label>
    </li>
  )
}

export default TodoItem
