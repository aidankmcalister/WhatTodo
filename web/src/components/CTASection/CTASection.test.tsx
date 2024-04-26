import { render } from '@redwoodjs/testing/web'

import CtaSection from './CtaSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CtaSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CtaSection />)
    }).not.toThrow()
  })
})
