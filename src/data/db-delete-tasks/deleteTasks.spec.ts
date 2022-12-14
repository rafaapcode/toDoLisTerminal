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

interface SutTypes {
  sut: DeleteTask
  deleteTaskRepository: DeleteTaskRepo
}

const makeSut = (): SutTypes => {
  const deleteTaskRepository = makeDeleteRepository()
  const sut = new DeleteTask(deleteTaskRepository)

  return {
    sut,
    deleteTaskRepository
  }
}

const path = resolve('src', 'database')

describe('Delete Tasks', () => {
  test('Should return a message on a success', async () => {
    const { sut } = makeSut()
    const msg = await sut.delete(path, 0)
    expect(msg).toBe('Deleted with success')
  })

  test('Should calls the delete method with correct value', async () => {
    const { deleteTaskRepository, sut } = makeSut()
    const spyDeleteRepo = jest.spyOn(deleteTaskRepository, 'delete')
    await sut.delete(path, 0)
    expect(spyDeleteRepo).toHaveBeenCalledWith(path, 0)
  })

  test('Should throws if DeleteTaskRepository method throws', async () => {
    const { deleteTaskRepository, sut } = makeSut()
    jest.spyOn(deleteTaskRepository, 'delete').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.delete(path, 0)
    await expect(promise).rejects.toThrow()
  })
})
