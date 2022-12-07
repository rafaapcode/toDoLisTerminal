import { TaskModel } from '../../domain/usecases/addtask/addtask'
import AddTaskRepository from '../protocols/addTaskRepo'

export default class AddTaskRepo implements AddTaskRepository {
  async add (task: TaskModel): Promise<string> {
    return 'ok'
  }
}
