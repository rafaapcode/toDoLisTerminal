import makeTodoList from './helper/makeTodo'

const todolist = makeTodoList()

todolist.execute()
  .then(r => {
    console.log(r)
  }).catch(err => console.error(err))
