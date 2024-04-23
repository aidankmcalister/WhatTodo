import type { Prisma, TodoItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TodoItemCreateArgs>({
  todoItem: {
    one: {
      data: { title: 'String', user: { create: { auth0id: 'String6643307' } } },
    },
    two: {
      data: { title: 'String', user: { create: { auth0id: 'String7395162' } } },
    },
  },
})

export type StandardScenario = ScenarioData<TodoItem, 'todoItem'>
