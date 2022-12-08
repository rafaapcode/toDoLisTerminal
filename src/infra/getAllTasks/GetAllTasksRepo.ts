import { AllTasksRepo } from '../../data/protocols/allTasksRepository'
import { TaskModel } from '../../domain/usecases/addtask/addtask'
import { readFile } from 'node:fs/promises'

export default class GetAllTasksRepo implements AllTasksRepo {
  async get (path: string): Promise<TaskModel[]> {
    const tasks = JSON.parse(await readFile(path, 'utf8'))
    return tasks
  }
}
