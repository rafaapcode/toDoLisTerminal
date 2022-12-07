import { TaskModel } from '../../domain/usecases/addtask/addtask'

export interface TaskAdd {
  add: (task: TaskModel) => Promise<string>
}
