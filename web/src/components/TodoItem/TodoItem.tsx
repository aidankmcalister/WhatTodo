import { useState } from 'react'

import { MinusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
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

const TodoItem = ({ item, filterStates }) => {
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
    <li
      className={`cursor-pointer rounded-md border bg-neutral-50 shadow-sm dark:border-gray-700 dark:bg-gray-800 ${
        completed &&
        ' border border-transparent bg-green-400/25 opacity-50 dark:border-transparent dark:bg-green-500/10  '
      }`}
    >
      <label
        className={`flex w-full flex-col justify-center p-5 ${
          completed && ' '
        } ${item.description && 'space-y-3'}`}
      >
        <div className={'flex w-full items-center'}>
          {completed ? (
            <CheckCircleIcon className="mr-5 h-10 w-10 cursor-pointer rounded-full p-1.5 text-green-500 md:hover:bg-green-100 md:dark:hover:bg-green-500/20" />
          ) : (
            <MinusCircleIcon className="mr-5 h-10 w-10 cursor-pointer rounded-full p-1.5 text-main-red  md:hover:bg-main-red/20  md:dark:hover:bg-main-red/20" />
          )}

          {/* Start Hidden */}
          <input
            type="checkbox"
            className="hidden"
            checked={completed}
            onChange={handleCheckboxClick}
          />
          {/* End Hidden */}

          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              <p className="font-medium dark:text-gray-300">{item.title}</p>
              <p className="text-sm text-gray-500">
                {format(item.createdAt, 'PP')}
              </p>
            </div>
            <TrashIcon
              className="w-9 rounded-full p-1.5 md:hover:bg-main-red/20 md:hover:text-main-red/80 dark:text-gray-300 md:dark:hover:bg-main-red/20"
              onClick={handleDelete}
            />
          </div>
        </div>
        {filterStates.showDescriptions && (
          <p className="text-gray-500 dark:text-gray-400">
            {item?.description}
          </p>
        )}
      </label>
    </li>
  )
}

export default TodoItem
