import "./App.css";
import { CreateTask } from "./components/CreateTask";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Task } from "./components/Task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((tasksItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="container">
        <div className="row my-5">
          {tasks.map((tasksItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={tasksItem.title}
                content={tasksItem.content}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
