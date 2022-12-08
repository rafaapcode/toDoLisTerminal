import { resolve } from 'node:path'
import GetAllTasksRepo from './GetAllTasksRepo'

describe('Get all the Tasks in the JSON DB', () => {
  test('Should return a TaskModel on a success', async () => {
    const sut = new GetAllTasksRepo()
    const path = resolve('src', 'infra', 'getAllTasks', 'mocks', 'valid-tasks.json')
    const allTasks = await sut.get(path)
    const expected = [
      { id: 1, body: 'Estudar ingles' },
      { id: 2, body: 'Estudar chines' },
      { id: 3, body: 'Estudar espanhol' }
    ]
    expect(allTasks).toEqual(expected)
  })
})
