import { db } from 'api/src/lib/db'

import todoItems from './todoItems'

export default async () => {
  try {
    await db.todoItem.deleteMany({})

    await db.todoItem.createMany({ data: todoItems })

    console.log('Todo items seeded successfully')
  } catch (error) {
    console.error('Error seeding todo items:', error)
  }
}
