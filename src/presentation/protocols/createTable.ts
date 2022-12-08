import { TaskModel } from '../../domain/usecases/addtask/addtask'

export interface Table {
  tasksQuantities: number
}

export interface CreateTable {
  create: (tasks: TaskModel[]) => Table
}
