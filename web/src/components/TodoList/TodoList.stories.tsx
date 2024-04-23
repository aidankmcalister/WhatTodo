// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import TodoList from './TodoList'

const meta: Meta<typeof TodoList> = {
  component: TodoList,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TodoList>

export const Primary: Story = {}
