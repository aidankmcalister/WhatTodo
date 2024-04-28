import type { Prisma, TodoItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TodoItemCreateArgs>({
  todoItem: {
    one: {
      data: { title: 'String', user: { create: { auth0id: 'String4504730' } } },
    },
    two: {
      data: { title: 'String', user: { create: { auth0id: 'String735433' } } },
    },
  },
})

export type StandardScenario = ScenarioData<TodoItem, 'todoItem'>
