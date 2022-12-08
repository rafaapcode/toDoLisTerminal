import AddTasks from './addTask'
import { TaskModel } from '../../domain/usecases/addtask/addtask'
import AddTaskRepository from '../protocols/addTaskRepository'
import TaskError from '../errors/taskError'
import { resolve } from 'node:path'

const makeAddTaskRepositoryStub = (): AddTaskRepository => {
  class AddTaskRepositoryStub implements AddTaskRepository {
    async add (task: TaskModel): Promise<string> {
      return Promise.resolve('ok')
    }
  }

  return new AddTaskRepositoryStub()
}

interface SutTypes {
  addTask: AddTasks
  addRepository: AddTaskRepository
}

const makeSut = (): SutTypes => {
  const addRepository = makeAddTaskRepositoryStub()
  const addTask = new AddTasks(addRepository)

  return {
    addTask,
    addRepository
  }
}

const path = resolve('src', 'database', 'dbTest.json')

describe('Add Tasks', () => {
  test('Should return the task was added', async () => {
    const { addTask } = makeSut()
    const task = 'Estudar inglês'
    const task2 = 'Estudar espanhol'
    const result = await addTask.addTask(task, path)
    expect(result).toEqual({ id: 1, body: 'Estudar inglês' })
    const result2 = await addTask.addTask(task2, path)
    expect(result2).toEqual({ id: 2, body: 'Estudar espanhol' })
  })

  test('Should return an TaskError if the task is a empty string', async () => {
    const { addTask } = makeSut()
    const task = ''
    const result = await addTask.addTask(task, path)
    expect(result.body).toEqual(new TaskError('Tasks is invalid'))
  })

  test('Should throw if the addTask method throws', async () => {
    const { addTask } = makeSut()
    jest.spyOn(addTask, 'addTask').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = addTask.addTask('Estudar Clean Architecture', path)
    await expect(promise).rejects.toThrow()
  })

  test('Should calls AddTaskRepository with correct values', async () => {
    const { addTask, addRepository } = makeSut()
    const spyRepository = jest.spyOn(addRepository, 'add')
    const task = { id: 1, body: 'Estudar Clean Architecture' }
    await addTask.addTask('Estudar Clean Architecture', path)
    expect(spyRepository).toHaveBeenCalledWith(task, path)
  })

  test('Should throw if the AddTaskRepository add method throws', async () => {
    const { addTask, addRepository } = makeSut()
    jest.spyOn(addRepository, 'add').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = addTask.addTask('Estudar Clean Architecture', path)
    await expect(promise).rejects.toThrow()
  })
})
