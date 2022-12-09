import { AddTask, TaskModel } from '../../domain/usecases/addtask/addtask'
import TaskError from '../errors/taskError'
import AddTaskRepository from '../protocols/addTaskRepository'
import GetAllTasks from '../db-all-tasks/getAllTasks'
import GetAllTasksRepo from '../../infra/getAllTasks/GetAllTasksRepo'
import { resolve } from 'node:path'

export default class AddTasks implements AddTask {
  private readonly repositoryTask: AddTaskRepository
  constructor (addTaskRepo: AddTaskRepository) {
    this.repositoryTask = addTaskRepo
  }

  async addTask (task: any, path: string): Promise<TaskModel> {
    if (!task) {
      return { id: 0, body: new TaskError('Tasks is invalid') }
    }
    const tasksAll = new GetAllTasksRepo()
    const all = new GetAllTasks(tasksAll)
    const id = await all.get(resolve('src', 'database', 'database.json'))
    let lastTask = id.at(-1)?.id
    if (!lastTask) lastTask = 0
    const taskToAdd = { id: lastTask + 1, body: task }
    await this.repositoryTask.add(taskToAdd, path)
    return taskToAdd
  }
}
