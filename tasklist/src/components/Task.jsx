import { FaTimes } from "react-icons/fa";

const Task = ({ text, date }) => {
    return (
        <li className="task">
            <h4>{ text }</h4>
            <p>{ date }</p>
            <FaTimes style={{ cursor: "pointer" }}/>
        </li>
    );
}

export default Task;