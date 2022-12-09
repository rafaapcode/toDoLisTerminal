import Options, { Option } from '../../presentation/protocols/options'
import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

export default class Ops implements Options {
  async op (): Promise<Option> {
    try {
      const rl = readline.createInterface({ input: stdin, output: stdout })
      const option = await rl.question(`O que deseja fazer ?
      1 - Adicionar tarefa
      2 - Deletar tarefa
      3 - Visualizar tarefas\n-> `
      )
      if (Number(option) < 1 || Number(option) > 3) {
        return {
          statusCode: 400,
          body: '\nERRO : Escolha uma das três opções\n'
        }
      }

      return {
        statusCode: 200,
        body: Number(option)
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: 'Escolha uma das três opções'
      }
    }
  }
}
