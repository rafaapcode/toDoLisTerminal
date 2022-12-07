import { TaskModel } from '../../domain/usecases/addtask/addtask'
import AddTaskRepository from '../protocols/addTaskRepo'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export default class AddTaskRepo implements AddTaskRepository {
  async add (task: TaskModel): Promise<string> {
    const tasks = JSON.parse(await readFile(resolve('src', 'database', 'dbTest.json'), 'utf8'))
    tasks.push(task)
    await writeFile(resolve('src', 'database', 'dbTest.json'), JSON.stringify(tasks, null, 2), { flag: 'w', encoding: 'utf8' })
    return 'ok'
  }
}
