import AddTasks from './addTask'
import { TaskModel } from '../../domain/usecases/addtask/addtask'
import { AddTaskRepository } from '../protocols/addTaskRepository'
import TaskError from '../errors/taskError'

const makeAddTaskRepositoryStub = (): AddTaskRepository => {
  class AddTaskRepositoryStub implements AddTaskRepository {
    async add (task: TaskModel): Promise<string> {
      return Promise.resolve('ok')
    }
  }

  return new AddTaskRepositoryStub()
}

describe('Add Tasks', () => {
  test('Should return the task was added', async () => {
    const addRepository = makeAddTaskRepositoryStub()
    const sut = new AddTasks(addRepository)
    const task = 'Estudar inglês'
    const task2 = 'Estudar espanhol'
    const result = await sut.addTask(task)
    expect(result).toEqual({ id: 1, body: 'Estudar inglês' })
    const result2 = await sut.addTask(task2)
    expect(result2).toEqual({ id: 2, body: 'Estudar espanhol' })
  })

  test('Should return an TaskError if the task is a empty string', async () => {
    const addRepository = makeAddTaskRepositoryStub()
    const sut = new AddTasks(addRepository)
    const task = ''
    const result = await sut.addTask(task)
    expect(result.body).toEqual(new TaskError('Tasks is invalid'))
  })

  test('Should throw if the addTask method throws', async () => {
    const addRepository = makeAddTaskRepositoryStub()
    const sut = new AddTasks(addRepository)
    jest.spyOn(sut, 'addTask').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.addTask('Estudar Clean Architecture')
    await expect(promise).rejects.toThrow()
  })

  test('Should calls AddTaskRepository with correct values', async () => {
    const addRepository = makeAddTaskRepositoryStub()
    const sut = new AddTasks(addRepository)
    const spyRepository = jest.spyOn(addRepository, 'add')
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    await sut.addTask('Estudar Clean Architecture')
    expect(spyRepository).toHaveBeenCalledWith(task)
  })
})
