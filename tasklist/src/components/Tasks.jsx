import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    //const [ task, setTask ] = useState(tasks);
    return (
        <div>
            <h2>Tasks</h2>
            <ul className="task-list">
                { //you can't use double {{ }} in here, instead use ()
                    tasks.map(( task ) => (//map returns the array to the outside 
                        <Task key={ task.id } task={ task } onDelete={ onDelete } onToggle={ onToggle }/>
                    ))
                }
            </ul>
        </div>
    );
}

export default Tasks;