import React, { useState } from 'react';
import Button from './Button'
import './Form.css';
const Form = (props) => {
    const [entervalue, setentervalue] = useState('');
    const goalInputChangeHandler = (event) => {
        setentervalue(event.target.value)

    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(entervalue)
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}
export default Form;