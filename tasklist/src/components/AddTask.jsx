import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [done, setDone] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text && date){
            onAdd({ text: text, date: date, done: done});
        }else{
            console.log("left");
        }
    }

    return (
        <form className="add-form">
            <div className="form-control">
                <label >Tasks</label>
                <input type="text" placeholder="Add a new task" value={text} onChange={ (e) => setText(e.target.value) } />
            </div>
            <div className="form-control">
                <label >Date</label>
                <input type="text" placeholder="Add a due date" value={date} onChange={ (e) => setDate(e.target.value) } />
            </div>
            <div className="form-control">
                <label >Done</label>
                <input type="checkbox" onChange={ (e) => setDone(e.currentTarget.checked) } />
            </div>
            <input className="btn btn-block" type="submit" value="Add task" onClick={ onSubmit }/>
        </form>
    );
}

export default AddTask;