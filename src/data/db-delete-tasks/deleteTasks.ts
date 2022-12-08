import { DeleteTasks } from '../../domain/usecases/deleteTasks/deleteTask'
import { DeleteTaskRepo } from '../protocols/deleteTaskRepo'

export default class DeleteTask implements DeleteTasks {
  private readonly deleteTasksRepository: DeleteTaskRepo
  constructor (deleteTasksRepo: DeleteTaskRepo) {
    this.deleteTasksRepository = deleteTasksRepo
  }

  async delete (path: string, id: number): Promise<string> {
    await this.deleteTasksRepository.delete(path, id)
    return 'Deleted with success'
  }
}
