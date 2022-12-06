import Options, { Option } from '../../presentation/protocols/options'

export default class Ops implements Options {
  op (): Option {
    try {
      const option = Number(prompt(`O que deseja fazer ?
      1 - Adicionar tarefa
      2 - Deletar tarefa
      3 - Visualizar tarefas`
      ))
      if (option < 1 || option > 3) {
        return {
          statusCode: 400,
          body: 'Escolha uma das três opções'
        }
      }

      return {
        statusCode: 200,
        body: option
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: 'Escolha uma das três opções'
      }
    }
  }
}
