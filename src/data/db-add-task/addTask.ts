import { AddTask, TaskModel } from '../../domain/usecases/addtask/addtask'
import TaskError from '../errors/taskError'

export default class AddTasks implements AddTask {
  private id: number

  constructor () {
    this.id = 1
  }

  async addTask (task: string): Promise<TaskModel> {
    if (!task) {
      return { id: 0, body: new TaskError('Tasks is invalid') }
    }
    const id = this.id++
    const taskToAdd = { id, body: task }
    return taskToAdd
  }
}
