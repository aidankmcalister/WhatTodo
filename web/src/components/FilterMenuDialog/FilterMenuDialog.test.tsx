import { render } from '@redwoodjs/testing/web'

import FilterMenuDialog from './FilterMenuDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FilterMenuDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FilterMenuDialog />)
    }).not.toThrow()
  })
})
