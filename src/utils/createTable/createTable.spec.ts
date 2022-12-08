import Table from './createTable'
import { TaskModel } from '../../domain/usecases/addtask/addtask'

const makeFakeTask = (): TaskModel[] => {
  return [
    { id: 1, body: 'Estudar inglês' },
    { id: 2, body: 'Estudar inglês' },
    { id: 3, body: 'Estudar inglês' }
  ]
}

const makeSut = (): Table => {
  return new Table()
}

describe('Create Table', () => {
  test('Should return correct quantity of tasks', () => {
    const sut = makeSut()
    const result = sut.create(makeFakeTask())
    expect(result.tasksQuantities).toBe(3)
  })

  test('Should create method calls correct values', () => {
    const sut = makeSut()
    const spyTable = jest.spyOn(sut, 'create')
    sut.create(makeFakeTask())
    expect(spyTable).toHaveBeenCalledWith(makeFakeTask())
  })
})
