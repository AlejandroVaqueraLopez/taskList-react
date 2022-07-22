import Header from "./components/Header";
import "./index.css";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import ButtonView from "./components/ButtonView";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [ tasks, setTasks ] = useState([
      {
          id: 1,
          text: "School",
          date: "November rain",
          done: false
      },
      {
          id: 2,
          text: "School 2",
          date: "November rain",
          done: false
      },
      {
          id: 3,
          text: "School 3",
          date: "November rain",
          done: false
      }
  ]);

  const addTask = (task) => {
    console.log({id: Math.floor(Math.random() * 1000), ...task });
    const newTask = {id: Math.floor(Math.random() * 1000), ...task };
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  //Delete task
  const deleteTask = (id) => {
    console.log("Delete", id);
    setTasks(tasks.filter((item) => item.id !== id));
  }

  const onShow= () => {
    setShowAddTask(!showAddTask);
  }

  const onToggleTask = (id) => {
    setTasks(tasks.map((item) => item.id === id ? {...item, done: !item.done} : item));
  }

  return (
    <div className="container">
      <Header />
      { showAddTask ? <AddTask onAdd={ addTask }/> : ("") }
      { <ButtonView text={ showAddTask ? "Close add form" : "Add new task" } onShow={ onShow } bg={ showAddTask ? "red" : "green"} /> }
      { tasks.length > 0 ? <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle= { onToggleTask }/> : ("You have 0 tasks") }
    </div>
  );
}

export default App;
