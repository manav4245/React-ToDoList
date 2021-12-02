import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4 className="my-3 text-light">{todo.title}</h4>
            <p className="text-light">{todo.desc}</p>
            <button className="btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button><hr></hr>
        </div>
    )
}   