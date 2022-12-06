import { TaskModel } from '../../domain/usecases/addtask/addtask'

export default class Table {
  create (tasks: TaskModel[]): number {
    console.table(tasks)
    return tasks.length
  }
}
