import { render } from '@redwoodjs/testing/web'

import HeroTodoItems from './HeroTodoItems'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeroTodoItems', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeroTodoItems />)
    }).not.toThrow()
  })
})
