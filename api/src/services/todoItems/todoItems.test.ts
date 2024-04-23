import type { TodoItem } from '@prisma/client'

import {
  todoItems,
  todoItem,
  createTodoItem,
  updateTodoItem,
  deleteTodoItem,
} from './todoItems'
import type { StandardScenario } from './todoItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('todoItems', () => {
  scenario('returns all todoItems', async (scenario: StandardScenario) => {
    const result = await todoItems()

    expect(result.length).toEqual(Object.keys(scenario.todoItem).length)
  })

  scenario('returns a single todoItem', async (scenario: StandardScenario) => {
    const result = await todoItem({ id: scenario.todoItem.one.id })

    expect(result).toEqual(scenario.todoItem.one)
  })

  scenario('creates a todoItem', async (scenario: StandardScenario) => {
    const result = await createTodoItem({
      input: { title: 'String', userId: scenario.todoItem.two.userId },
    })

    expect(result.title).toEqual('String')
    expect(result.userId).toEqual(scenario.todoItem.two.userId)
  })

  scenario('updates a todoItem', async (scenario: StandardScenario) => {
    const original = (await todoItem({
      id: scenario.todoItem.one.id,
    })) as TodoItem
    const result = await updateTodoItem({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a todoItem', async (scenario: StandardScenario) => {
    const original = (await deleteTodoItem({
      id: scenario.todoItem.one.id,
    })) as TodoItem
    const result = await todoItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
