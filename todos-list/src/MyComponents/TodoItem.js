import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4 className="my-3 ">{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button><hr></hr>
        </div>
    )
}   