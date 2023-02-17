import React from 'react';
import TodoItem from "./TodoItem.jsx";

function TodoList({list = [], handleRemoveTodo, onToggleTodo}) {
    return (
        <>
            <ul className="list-group">
                {
                    list.map(
                        (item) => <TodoItem todo={item} key={item.id} handleRemoveTodo={handleRemoveTodo}
                                            onToggleTodo={onToggleTodo}/>
                    )
                }
            </ul>
        </>
    );
}

export default TodoList;