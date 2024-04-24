import TodoItem from 'src/components/TodoItem'

const TodoList = ({ todoItems }) => {
  return (
    <ul className="min-w-[90vw] space-y-3 md:min-w-[60vw] xl:min-w-[40vw]">
      {todoItems.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default TodoList
