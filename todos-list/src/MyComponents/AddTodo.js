import React, {useState} from 'react';
import './AddTodo.css'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)  =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be blank")
        }
        else
        {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="form1 my-4 ">
            <u><h2 className="text-center my-3">Add Todos </h2></u>
            <form onSubmit={submit} className="my-4">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label ">Add Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label ">Add Todo Discription</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc1" />
                </div>

                <button type="submit" className="btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
