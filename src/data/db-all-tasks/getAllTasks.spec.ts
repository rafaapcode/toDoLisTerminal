import GetAllTasks from './getAllTasks'
import { resolve } from 'node:path'
import { AllTasksRepo } from '../protocols/allTasksRepository'
import { TaskModel } from '../../domain/usecases/addtask/addtask'

const makeAllTasksRepo = (): AllTasksRepo => {
  class AllTasksRepository implements AllTasksRepo {
    async get (path: string): Promise<TaskModel[]> {
      return [
        {
          id: 1,
          body: 'Estudar WIN'
        },
        {
          id: 2,
          body: 'Estudar WDO'
        },
        {
          id: 3,
          body: 'Estudar Ingles'
        }
      ]
    }
  }

  return new AllTasksRepository()
}

interface SutTypes {
  sut: GetAllTasks
  allTasksRepository: AllTasksRepo
}

const makeSut = (): SutTypes => {
  const allTasksRepository = makeAllTasksRepo()
  const sut = new GetAllTasks(allTasksRepository)

  return {
    sut,
    allTasksRepository
  }
}

const path = resolve('src', 'db-all-tasks', 'mocks')

describe('Add Tasks', () => {
  test('Should return all tasks in the JSON DB', async () => {
    const { sut } = makeSut()
    const tasks = await sut.get(path)
    expect(tasks).toEqual([
      {
        id: 1,
        body: 'Estudar WIN'
      },
      {
        id: 2,
        body: 'Estudar WDO'
      },
      {
        id: 3,
        body: 'Estudar Ingles'
      }
    ])
  })

  test('Should calls AllTasksRepository method with correct values', async () => {
    const { allTasksRepository, sut } = makeSut()
    const spyAllTasks = jest.spyOn(allTasksRepository, 'get')
    await sut.get(path)
    expect(spyAllTasks).toHaveBeenCalledWith(resolve('src', 'db-all-tasks', 'mocks'))
  })

  test('Should throws if AllTasksRepository method throw', async () => {
    const { allTasksRepository, sut } = makeSut()
    jest.spyOn(allTasksRepository, 'get').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.get(path)
    await expect(promise).rejects.toThrow()
  })
})
