import React, {useReducer} from 'react';
import {todoReducer} from "../08-useReducer/todoReducer.js";



function useTodo() {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos'))
    }
    const [state, dispath] = useReducer(todoReducer, [], init)
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispath(action)
    }
    const handleRemoveTodo = (todo) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo
        }
        dispath(action)
    }
    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] toggle Todo',
            payload: id
        }
        dispath(action)
    }
    return {
        state,
        handleNewTodo,
        handleRemoveTodo,
        onToggleTodo
    }
}

export default useTodo;