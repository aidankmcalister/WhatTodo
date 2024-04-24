import type { Meta, StoryObj } from '@storybook/react'

import TodoPage from './TodoPage'

const meta: Meta<typeof TodoPage> = {
  component: TodoPage,
}

export default meta

type Story = StoryObj<typeof TodoPage>

export const Primary: Story = {}
