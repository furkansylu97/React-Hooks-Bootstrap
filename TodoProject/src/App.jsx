import './App.css'
import { CreateTask } from './components/CreateTask'
import Header from './components/Header'

function App() {

  const addTask = (newTask) => {
    console.log(newTask);
  }

  return (
    <>
     <Header />
     <CreateTask onAdd={addTask} />
    </>
  )
}

export default App
