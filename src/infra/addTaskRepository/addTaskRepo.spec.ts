import AddTaskRepo from './addTaskRepo'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('Add Task Repository', () => {
  beforeEach(async () => {
    const tasks = JSON.parse(await readFile(resolve('src', 'database', 'dbTest.json'), 'utf8'))
    tasks.splice(0, tasks.length)
    await writeFile(resolve('src', 'database', 'dbTest.json'), JSON.stringify(tasks), { flag: 'w', encoding: 'utf8' })
  })
  test('Should return a message if success', async () => {
    const sut = new AddTaskRepo()
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    const result = await sut.add(task, resolve('src', 'database', 'dbTest.json'))
    expect(result).toBe('ok')
  })

  test('Should throws an error if addTaskRepository throw', async () => {
    const sut = new AddTaskRepo()
    const addRepoSpy = jest.spyOn(sut, 'add') as unknown as jest.Mock<ReturnType<(key: Error) => Promise<Error>>, Parameters<(key: Error) => Promise<Error>>>
    addRepoSpy.mockReturnValueOnce(Promise.reject(new Error()))
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    const promise = sut.add(task, resolve('src', 'database', 'dbTest.json'))
    await expect(promise).rejects.toThrow()
  })
})
