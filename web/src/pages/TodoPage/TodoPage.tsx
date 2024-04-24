import { Metadata } from '@redwoodjs/web'

import TodoCell from 'src/components/TodoCell'

const TodoPage = () => {
  return (
    <>
      <Metadata title="Todo" description="Todo page" />

      <section className="flex flex-grow flex-col items-center p-5">
        <TodoCell />
      </section>
    </>
  )
}

export default TodoPage
