import { DeleteTaskRepo } from '../../data/protocols/deleteTaskRepo'
import { readFile, writeFile } from 'node:fs/promises'
import { TaskModel } from '../../domain/index'

export default class DeleteTaskRepository implements DeleteTaskRepo {
  async delete (path: string, identifier: number): Promise<void> {
    const allTasks = JSON.parse(await readFile(path, 'utf8'))
    const taskToDelete = allTasks.findIndex((e: TaskModel) => e.id === identifier)
    allTasks.splice(taskToDelete, 1)
    await writeFile(path, JSON.stringify(allTasks), { flag: 'w', encoding: 'utf8' })
  }
}
