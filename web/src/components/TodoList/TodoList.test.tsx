import { render } from '@redwoodjs/testing/web'

import TodoList from './TodoList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TodoList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoList />)
    }).not.toThrow()
  })
})
