import { CreateTable } from './../protocols/createTable'
import Options from '../protocols/options'
import { AddTask, DeleteTasks, GetTasks } from '../../domain'
import { resolve } from 'node:path'

export default class ToDoList {
  private readonly options: Options
  private readonly createTable: CreateTable
  private readonly addTask: AddTask
  private readonly getAllTaks: GetTasks
  private readonly deleteTask: DeleteTasks
  private readonly path: string
  constructor (op: Options, createTable: CreateTable, addtask: AddTask, getalltaks: GetTasks, deletetask: DeleteTasks) {
    this.createTable = createTable
    this.options = op
    this.addTask = addtask
    this.getAllTaks = getalltaks
    this.deleteTask = deletetask
    this.path = resolve('src', 'database', 'database.json')
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
          const task = prompt('Qual tarefa quer adicionar no dia de hoje ?')
          await this.addTask.addTask(task, this.path)
          continue
        } else if (body === 2) {
          const taskId = Number(prompt('Qual é o ID da tarefa que deseja remover ?'))
          await this.deleteTask.delete(this.path, taskId)
          while (true) {
            const deleteMoreTasks = prompt(`Deseja remover mais tarefas ?
            1 - Sim
            2 - Não`)
            if (Number(deleteMoreTasks) === 2) break
            const taskId = Number(prompt('Qual é o ID da tarefa que deseja remover ?'))
            await this.deleteTask.delete(this.path, taskId)
          }
          continue
        } else if (body === 3) {
          const allTasks = await this.getAllTaks.get(this.path)
          this.createTable.create(allTasks)
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
