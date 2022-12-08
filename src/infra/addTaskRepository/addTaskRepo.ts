import { TaskModel } from '../../domain/usecases/addtask/addtask'
import AddTaskRepository from '../../data/protocols/addTaskRepository'
import { readFile, writeFile } from 'node:fs/promises'

export default class AddTaskRepo implements AddTaskRepository {
  async add (task: TaskModel, path: string): Promise<string> {
    const tasks = JSON.parse(await readFile(path, 'utf8'))
    tasks.push(task)
    await writeFile(path, JSON.stringify(tasks, null, 2), { flag: 'w', encoding: 'utf8' })
    return 'ok'
  }
}
