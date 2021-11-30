import React, { useState } from "react";



const TodoForm = (props) => {
    const [formValue, setFormValue] = useState('');

    const onChange = (e) => {
        setFormValue(e.target.value)
    }



    return (
        <form>
            <input
                type='text'
                name='todo'
                onChange={onChange}
                value={formValue}
            />
            <button onClick={props.addItem}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;