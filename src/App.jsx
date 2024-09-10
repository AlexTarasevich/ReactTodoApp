import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodods] = useState([

    'Go to gym',
    'Learn React',
    'Eat more froots and vegetables'

  ])
  function hendleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodods(newTodoList)
  }




  return (
    <>
      <TodoInput hendleAddTodos={hendleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
