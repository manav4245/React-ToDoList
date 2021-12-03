import React from 'react'
import { TodoItem } from './TodoItem'
import './Todos.css'

export const Todos = (props) => {
    return (
        <div className="mnv ">
            <u><h2 className="lst1 my-3 text-center ">Todos List</h2></u>
            {props.todos.length===0? "Nothing to Display":
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
                }
        </div>
    )
}