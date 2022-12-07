import { GetTasks } from '../../domain/usecases/allTasks/getAllTasks'
import { AllTasksRepo } from '../protocols/allTasksRepository'
import { TaskModel } from '../../domain/usecases/addtask/addtask'

export default class GetAllTasks implements GetTasks {
  private readonly allTasksRepo: AllTasksRepo
  constructor (allTasksRepository: AllTasksRepo) {
    this.allTasksRepo = allTasksRepository
  }

  async get (path: string): Promise<TaskModel[]> {
    const tasks = await this.allTasksRepo.get(path)
    return tasks
  }
}
