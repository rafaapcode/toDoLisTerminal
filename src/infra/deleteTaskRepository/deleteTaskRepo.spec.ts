import { resolve } from 'path'
import { readFile, writeFile } from 'node:fs/promises'
import DeleteTaskRepository from './DeleteTaskRepo'

const path = resolve('src', 'infra', 'deleteTaskRepository', 'mocks', 'valid-tasks.json')

const sut = new DeleteTaskRepository()

describe('Delete task', () => {
  afterAll(async () => {
    const expected = [
      { id: 1, body: 'Estudar ingles' },
      { id: 2, body: 'Estudar chines' },
      { id: 3, body: 'Estudar espanhol' }
    ]
    await writeFile(path, JSON.stringify(expected), { flag: 'w', encoding: 'utf8' })
  })

  test('Should delete the choose task', async () => {
    const tasks = JSON.parse(await readFile(path, 'utf8'))
    const expected = [
      { id: 1, body: 'Estudar ingles' },
      { id: 2, body: 'Estudar chines' },
      { id: 3, body: 'Estudar espanhol' }
    ]
    const expectedWithout = [
      { id: 1, body: 'Estudar ingles' },
      { id: 3, body: 'Estudar espanhol' }
    ]
    expect(tasks).toEqual(expected)
    await sut.delete(path, 2)
    const tasksWithoutAtask = JSON.parse(await readFile(path, 'utf8'))
    expect(tasksWithoutAtask).toEqual(expectedWithout)
  })

  test('Should calls method with correct values', async () => {
    const spyDelete = jest.spyOn(sut, 'delete')
    await sut.delete(path, 2)
    expect(spyDelete).toHaveBeenCalledWith(path, 2)
  })
})
