import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todoItems }) => {
  return (
    <div className="w-64 space-y-3">
      {todoItems.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList
