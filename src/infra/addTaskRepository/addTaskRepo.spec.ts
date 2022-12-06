import AddTaskRepo from './addTaskRepo'

describe('Add Task Repository', () => {
  test('Should return a message if success', async () => {
    const sut = new AddTaskRepo()
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    const result = await sut.add(task)
    expect(result).toBe('ok')
  })
})
