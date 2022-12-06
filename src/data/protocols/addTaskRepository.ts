import { TaskModel } from '../../domain/usecases/addtask/addtask'

export interface AddTaskRepository {
  add: (task: TaskModel) => Promise<string>
}
