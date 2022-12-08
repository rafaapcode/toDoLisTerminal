export interface DeleteTaskRepo {
  delete: (path: string, identifier: number) => Promise<void>
}
