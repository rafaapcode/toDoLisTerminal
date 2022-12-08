export interface DeleteTasks {
  delete: (path: string, id: number) => Promise<string>
}
