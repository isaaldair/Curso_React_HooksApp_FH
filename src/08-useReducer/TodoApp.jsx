import React, {useEffect, useReducer} from 'react';
import {todoReducer} from "./todoReducer.js";
import TodoList from "./TodoList.jsx";
import TodoAdd from "./TodoAdd.jsx";
import useTodo from "../hooks/useTodo.js";



function TodoApp(props) {
    const { state, handleNewTodo, handleRemoveTodo, onToggleTodo} = useTodo()
    useEffect(() => {
        localStorage.setItem(
            'todos', JSON.stringify(state) || []
        )
    }, [state])
    return (
        <>
            <h1> TodoAPP: 10, <small> Pendientes: 3</small></h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList list={state} handleRemoveTodo={handleRemoveTodo} onToggleTodo={onToggleTodo}/>
                </div>
                <div className="col-5">
                    <h4> Agregar TODO </h4>
                    <hr/>
                    <TodoAdd handleNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    );
}

export default TodoApp;