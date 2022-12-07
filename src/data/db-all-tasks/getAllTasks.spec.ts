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

describe('Add Tasks', () => {
  test('Should return all tasks in the JSON DB', async () => {
    const path = resolve('src', 'db-all-tasks', 'mocks')
    const allTasksRepository = makeAllTasksRepo()
    const sut = new GetAllTasks(allTasksRepository)
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
})
