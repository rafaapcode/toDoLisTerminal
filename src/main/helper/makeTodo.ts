import ToDoList from '../../presentation/todoList/todoList'
import Ops from '../../utils/option/options'
import TableCreate from '../../utils/createTable/createTable'
import AddTasks from '../../data/db-add-task/addTask'
import AddTaskRepo from '../../infra/addTaskRepository/addTaskRepo'
import GetAllTasks from '../../data/db-all-tasks/getAllTasks'
import GetAllTasksRepo from '../../infra/getAllTasks/GetAllTasksRepo'
import DeleteTask from '../../data/db-delete-tasks/deleteTasks'
import DeleteTaskRepo from '../../infra/deleteTaskRepository/DeleteTaskRepo'

const makeTodoList = (): ToDoList => {
  const options = new Ops()
  const createTable = new TableCreate()
  const addTaskRepository = new AddTaskRepo()
  const addTask = new AddTasks(addTaskRepository)
  const getAllTaskRepo = new GetAllTasksRepo()
  const getAllTasks = new GetAllTasks(getAllTaskRepo)
  const deleteTaskRepo = new DeleteTaskRepo()
  const deleteTask = new DeleteTask(deleteTaskRepo)
  return new ToDoList(options, createTable, addTask, getAllTasks, deleteTask)
}

export default makeTodoList
