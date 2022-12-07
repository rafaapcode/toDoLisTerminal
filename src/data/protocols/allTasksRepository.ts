import { TaskModel } from '../../domain/usecases/addtask/addtask'

export interface AllTasksRepo {
  get: (path: string) => Promise<TaskModel[]>
}
