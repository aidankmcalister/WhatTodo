import TodoItem from 'src/components/TodoItem'

const TodoList = ({ todoItems }) => {
  return (
    <ul className="w-64 space-y-3">
      {todoItems.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default TodoList
