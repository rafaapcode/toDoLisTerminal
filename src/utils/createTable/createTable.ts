export default class Table {
  create (tasks: any[]): number {
    console.table(tasks)
    return tasks.length
  }
}
