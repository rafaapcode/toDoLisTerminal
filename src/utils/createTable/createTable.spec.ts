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
    expect(result).toBe(4)
  })
})
