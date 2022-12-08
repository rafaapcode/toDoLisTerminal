export interface DeleteTaskRepo {
  delete: (path: string) => Promise<void>
}
