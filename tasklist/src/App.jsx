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


  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks }/>
    </div>
  );
}

export default App;
