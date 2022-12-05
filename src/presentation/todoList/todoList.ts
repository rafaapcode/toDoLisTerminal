export default class ToDoList {
  private readonly options: any
  private readonly createTable: any
  private readonly addTask: any
  private readonly getAllTaks: any
  private readonly deleteTask: any

  constructor (op: any, createTable: any, addtask: any, getalltaks: any, deletetask: any) {
    this.createTable = createTable
    this.options = op
    this.addTask = addtask
    this.getAllTaks = getalltaks
    this.deleteTask = deletetask
  }

  async execute (): Promise<void> {
    try {
      console.log('----------------------------------')
      console.log('Bem-Vindo a sua Lista de Tarefas')
      console.log('----------------------------------')
      console.log('')
      while (true) {
        const options = this.options.op()
        if (options === 1) {
          const allTasks = []
          const task = prompt('Qual tarefa quer adicionar no dia de hoje ?')
          allTasks.push(task)
          while (true) {
            const moreTasks = prompt(`Deseja adicionar mais tarefas ?
            1 - Sim
            2 - Não`)
            if (Number(moreTasks) === 2) break
            const otherTask = prompt('Qual tarefa quer adicionar no dia de hoje ?')
            allTasks.push(otherTask)
          }
          await this.addTask(allTasks)
          console.log(options)
        } else if (options === 2) {
          const taskId = Number(prompt('Qual é o ID da tarefa que deseja remover ?'))
          await this.deleteTask(taskId)
          while (true) {
            const deleteMoreTasks = prompt(`Deseja remover mais tarefas ?
            1 - Sim
            2 - Não`)
            if (Number(deleteMoreTasks) === 2) break
            const taskId = prompt('Qual é o ID da tarefa que deseja remover ?')
            await this.deleteTask(taskId)
          }
        } else if (options === 3) {
          const allTasks = await this.getAllTaks()
          this.createTable(allTasks)
          console.log(options)
        } else {
          console.log('error')
        }
        const exit = Number(prompt(`Deseja sair da sua lista ?
        1 - Sim
        2 - Não`))
        if (exit === 1) break
      }
    } catch (error) {
      console.log('Dados inesperados foram passados !')
    }
  }
}
