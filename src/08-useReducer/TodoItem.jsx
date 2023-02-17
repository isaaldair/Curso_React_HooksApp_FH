import React from 'react';

function TodoItem({todo, handleRemoveTodo, onToggleTodo}) {
    const { done, description, id} = todo
    return (
        <>
            <li key={id} className="list-group-item d-flex justify-content-between">
                <span
                    className={`align-self-center fw-bold ${(done) ? 'text-decoration-line-through': ''}`}
                    onClick={() => onToggleTodo(id)}

                >{description} </span>
                <button className="btn btn-danger" onClick={()=> {handleRemoveTodo(todo)}}> Borrar</button>
            </li>
        </>
    );
}

export default TodoItem;