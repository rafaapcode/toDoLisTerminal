import Table from './createTable'

describe('Create Table', () => {
  test('Should return correct quantity of tasks', () => {
    const sut = new Table()
    const tasks = [
      { id: 1, task: 'Estudar inglês' },
      { id: 2, task: 'Estudar inglês' },
      { id: 3, task: 'Estudar inglês' }
    ]
    const result = sut.create(tasks)
    expect(result).toBe(3)
    tasks.push({ id: 4, task: 'Estudar inglês' })
    const result2 = sut.create(tasks)
    expect(result2).toBe(4)
  })

  test('Should create method calls correct values', () => {
    const sut = new Table()
    const spyTable = jest.spyOn(sut, 'create')
    const tasks = [
      { id: 1, task: 'Estudar inglês' },
      { id: 2, task: 'Estudar inglês' },
      { id: 3, task: 'Estudar inglês' }
    ]
    sut.create(tasks)
    expect(spyTable).toHaveBeenCalledWith(tasks)
  })
})
