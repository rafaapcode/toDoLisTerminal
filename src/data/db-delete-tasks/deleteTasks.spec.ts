import { resolve } from 'node:path'
import { DeleteTaskRepo } from '../protocols/deleteTaskRepo'
import DeleteTask from './deleteTasks'

const makeDeleteRepository = (): DeleteTaskRepo => {
  class DeleteRepository implements DeleteTaskRepo {
    async delete (path: string): Promise<void> {
      console.log('Deleted with success')
    }
  }

  return new DeleteRepository()
}

describe('Delete Tasks', () => {
  test('Should return a message on a success', async () => {
    const deleteRepo = makeDeleteRepository()
    const sut = new DeleteTask(deleteRepo)
    const path = resolve()
    const msg = await sut.delete(path)
    expect(msg).toBe('Deleted with success')
  })
})
