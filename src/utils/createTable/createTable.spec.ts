import Table from './createTable'

const makeSut = (): Table => {
  return new Table()
}

describe('Create Table', () => {
  test('Should return correct quantity of tasks', () => {
    const sut = makeSut()
    const tasks = [
      { id: 1, body: 'Estudar inglês' },
      { id: 2, body: 'Estudar inglês' },
      { id: 3, body: 'Estudar inglês' }
    ]
    const result = sut.create(tasks)
    expect(result).toBe(3)
    tasks.push({ id: 4, body: 'Estudar inglês' })
    const result2 = sut.create(tasks)
    expect(result2).toBe(4)
  })

  test('Should create method calls correct values', () => {
    const sut = makeSut()
    const spyTable = jest.spyOn(sut, 'create')
    const tasks = [
      { id: 1, body: 'Estudar inglês' },
      { id: 2, body: 'Estudar inglês' },
      { id: 3, body: 'Estudar inglês' }
    ]
    sut.create(tasks)
    expect(spyTable).toHaveBeenCalledWith(tasks)
  })
})
