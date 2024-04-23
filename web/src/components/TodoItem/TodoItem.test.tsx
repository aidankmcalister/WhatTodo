import { render } from '@redwoodjs/testing/web'

import TodoItem from './TodoItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TodoItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoItem />)
    }).not.toThrow()
  })
})
