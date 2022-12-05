type SelectOption = number
type Erro = string

export interface Option {
  statusCode: number
  body: SelectOption | Erro
}

export default interface Options {
  op: () => Option
}
