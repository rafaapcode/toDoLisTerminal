export interface TaskModel {
  id: number
  body: string | Error
}

export interface AddTask {
  addTask: (task: any, path: string) => Promise<TaskModel>
}
