/* eslint-disable jsx-a11y/label-has-associated-control */
import { TrashIcon } from '@heroicons/react/24/outline'

const TodoItem = ({ item }) => {
  const handleCheckboxClick = (event) => {
    event.stopPropagation()
  }

  const handleTrashIconClick = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <label className="flex w-full cursor-pointer space-x-3 rounded-md border p-5 shadow-sm">
      <input
        type="checkbox"
        defaultChecked={item.completed}
        onClick={handleCheckboxClick}
        onChange={() => {}}
      />
      <div className="flex w-full items-center justify-between">
        <p>{item.title}</p>
        <TrashIcon className="w-5" onClick={handleTrashIconClick} />
      </div>
    </label>
  )
}

export default TodoItem
