export interface TaskModel {
  id: number
  body: string | Error
}

export interface AddTask {
  addTask: (task: string, path: string) => Promise<TaskModel>
}
