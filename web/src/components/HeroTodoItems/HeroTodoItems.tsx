import {  useState } from 'react'

import {
  CheckCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { format, subDays } from 'date-fns'

const itemsList = [
  {
    id: 1,
    title: 'Find the best Todo App',
    completed: true,
    date: format(subDays(new Date(), 6), 'PP'),
  },
  {
    id: 2,
    title: 'Sign up for What Todo',
    completed: false,
    date: format(subDays(new Date(), 5), 'PP'),
  },
  {
    id: 3,
    title: 'Make some todos',
    completed: false,
    date: format(subDays(new Date(), 4), 'PP'),
  },
  {
    id: 4,
    title: 'Start getting sh*t done.',
    completed: false,
    date: format(subDays(new Date(), 3), 'PP'),
  },
]

const HeroTodoItems = () => {
  return (
    <ul className="w-full space-y-3">
      {itemsList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

const TodoItem = ({ item }) => {
  const [completed, setCompleted] = useState(item.completed)

  const handleCheckboxClick = async () => {
    const newCompleted = !completed
    setCompleted(newCompleted)
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    event.preventDefault()
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
        }`}
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
              <p className="text-sm text-gray-500">{format(item.date, 'PP')}</p>
            </div>
            <TrashIcon
              className="w-9 rounded-full p-1.5 md:hover:bg-main-red/20 md:hover:text-main-red/80 dark:text-gray-300 md:dark:hover:bg-main-red/20"
              onClick={handleDelete}
            />
          </div>
        </div>
      </label>
    </li>
  )
}

export default HeroTodoItems
