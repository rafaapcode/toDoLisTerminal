import { CreateTable } from './../protocols/createTable'
import Options from '../protocols/options'
import { AddTask, DeleteTasks, GetTasks } from '../../domain'

export default class ToDoList {
  private readonly options: Options
  private readonly createTable: any
  private readonly addTask: any
  private readonly getAllTaks: any
  private readonly deleteTask: any

  constructor (op: Options, createTable: CreateTable, addtask: AddTask, getalltaks: GetTasks, deletetask: DeleteTasks) {
    this.createTable = createTable
    this.options = op
    this.addTask = addtask
    this.getAllTaks = getalltaks
    this.deleteTask = deletetask
  }

  async execute (): Promise<any> {
    try {
      console.log('----------------------------------')
      console.log('Bem-Vindo a sua Lista de Tarefas')
      console.log('----------------------------------')
      console.log('')
      while (true) {
        const { statusCode, body } = this.options.op()
        if (statusCode === 400) {
          console.log(body)
          continue
        }
        if (body === 1) {
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
          console.log(body)
        } else if (body === 2) {
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
        } else if (body === 3) {
          const allTasks = await this.getAllTaks()
          this.createTable(allTasks)
          console.log(body)
        } else {
          console.log('error')
        }
        const exit = Number(prompt(`Deseja sair da sua lista ?
        1 - Sim
        2 - Não`))
        if (exit === 1) break
      }
      console.log('Programa encerrado')
    } catch (error) {
      console.log('Dados inesperados foram passados !')
    }
  }
}
