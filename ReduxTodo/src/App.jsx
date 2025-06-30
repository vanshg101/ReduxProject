import { useEffect } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector } from 'react-redux'

function App() {
  const todos=useSelector((state)=>state.todos)
  
  useEffect(()=>{
    localStorage.setItem("todoKey",JSON.stringify(todos))
  },[todos])
  
  return (
    <>
    <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
