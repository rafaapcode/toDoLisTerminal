import { TaskModel } from '../../domain/usecases/addtask/addtask'

export default interface AddTaskRepository {
  add: (task: TaskModel, path: string) => Promise<string>
}
