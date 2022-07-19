import Header from "./components/Header";
import "./index.css";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
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

  //Delete task
  const deleteTask = (id) => {
    console.log("Delete", id);
    setTasks(tasks.filter((item) => item.id !== id));
  }

  const onToggle = (id) => {
    setTasks(tasks.map((item) => item.id === id ? {...item, done: !item.done} : item));
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle= { onToggle }/> : ("You have 0 tasks") }
    </div>
  );
}

export default App;
