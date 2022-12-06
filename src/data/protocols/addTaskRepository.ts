import { TaskModel } from '../../domain/usecases/addtask/addtask'

export interface taskAdd {
  add: (task: TaskModel) => Promise<string>
}
