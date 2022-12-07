import { AddTask, TaskModel } from '../../domain/usecases/addtask/addtask'
import TaskError from '../errors/taskError'
import { TaskAdd } from '../protocols/addTaskRepository'

export default class AddTasks implements AddTask {
  private id: number
  private readonly repositoryTask: TaskAdd
  constructor (addTaskRepo: TaskAdd) {
    this.id = 1
    this.repositoryTask = addTaskRepo
  }

  async addTask (task: string): Promise<TaskModel> {
    if (!task) {
      return { id: 0, body: new TaskError('Tasks is invalid') }
    }
    const id = this.id++
    const taskToAdd = { id, body: task }
    await this.repositoryTask.add(taskToAdd)
    return taskToAdd
  }
}