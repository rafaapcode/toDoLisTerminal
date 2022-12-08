import { TaskModel } from '../../domain/usecases/addtask/addtask'
import { CreateTable, Table } from '../../presentation/protocols/createTable'

export default class TableCreate implements CreateTable {
  create (tasks: TaskModel[]): Table {
    console.table(tasks)
    return { tasksQuantities: tasks.length }
  }
}
