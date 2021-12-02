import React from 'react'

export const Todos = () => {
    return (
        <div className="container">
            <h3>Todos List</h3>
            {props.todos}
        </div>
    )
}