export interface Table {
  tasksQuantities: number
}

export interface CreateTable {
  create: () => Table
}
