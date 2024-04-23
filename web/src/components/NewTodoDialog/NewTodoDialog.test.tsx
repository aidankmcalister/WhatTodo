import { render } from '@redwoodjs/testing/web'

import NewTodoDialog from './NewTodoDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewTodoDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTodoDialog />)
    }).not.toThrow()
  })
})
