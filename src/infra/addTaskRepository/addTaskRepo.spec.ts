import AddTaskRepo from './addTaskRepo'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const path = resolve('src', 'database', 'dbTest.json')

const sut = new AddTaskRepo()

describe('Add Task Repository', () => {
  beforeEach(async () => {
    const tasks = JSON.parse(await readFile(path, 'utf8'))
    tasks.splice(0, tasks.length)
    await writeFile(path, JSON.stringify(tasks), { flag: 'w', encoding: 'utf8' })
  })

  test('Should return a message if success', async () => {
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    const result = await sut.add(task, path)
    expect(result).toBe('ok')
  })

  test('Should throws an error if addTaskRepository throw', async () => {
    const addRepoSpy = jest.spyOn(sut, 'add') as unknown as jest.Mock<ReturnType<(key: Error) => Promise<Error>>, Parameters<(key: Error) => Promise<Error>>>
    addRepoSpy.mockReturnValueOnce(Promise.reject(new Error()))
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    const promise = sut.add(task, path)
    await expect(promise).rejects.toThrow()
  })
})
