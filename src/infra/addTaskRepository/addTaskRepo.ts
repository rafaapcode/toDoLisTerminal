import { TaskModel } from '../../domain/usecases/addtask/addtask'
import AddTaskRepository from '../protocols/addTaskRepo'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export default class AddTaskRepo implements AddTaskRepository {
  async add (task: TaskModel): Promise<string> {
    await writeFile(resolve('src', 'database', 'test.json'), JSON.stringify(task), { flag: 'a+' })
    return 'ok'
  }
}
