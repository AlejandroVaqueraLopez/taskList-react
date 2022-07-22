import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const Task = ({ task, onDelete, onToggle }) => {
    const {id, text, date} = task;
    return (
        <li className={ `task ${task.done ? "terminado" : ""}` }>
            <h4>{ text }</h4>
            <p>{ date }</p>
            <Button text={ "Done" } background={ "orange" } onToggle={ onToggle } id={ id } />
            <FaTimes style={{ cursor: "pointer" }} onClick={ () => onDelete(id) }/>
        </li>
    );
}

export default Task;