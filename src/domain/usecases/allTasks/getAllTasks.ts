import { TaskModel } from '../addtask/addtask'

export interface GetTasks {
  get: (path: string) => Promise<TaskModel[]>
}
