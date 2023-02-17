import React from 'react';
import useForm from "../hooks/useForm.js";

function TodoAdd({handleNewTodo}) {
    const initialValue = {
        done: false,
        id: null,
        description: ''
    }
    const {onInputChange, onResetForm, description} = useForm({initialForm: initialValue})
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }
        onResetForm()
        handleNewTodo(newTodo)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="Tarea"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}
            />
            <button
                className="btn btn-primary mx-0"
                onClick={onFormSubmit}
            > Guardar
            </button>
        </form>
    );
}

export default TodoAdd;