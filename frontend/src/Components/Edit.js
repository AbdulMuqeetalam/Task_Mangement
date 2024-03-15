import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [task , setTask] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.put(`http://localhost:8081/edit/${id}`,{task})
        .then(res => {
            console.log(res);
            navigate("/")
        }).catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primmary justify-content-center align-items-center'>
      <div className='w-60 rounded p-4'>
        <form onSubmit={handleSubmit}>
            <h3>Add Task</h3>
            <div className='mb-2'>
                <input onChange={e => setTask(e.target.value)} placeholder='Edit Your task' type='text' className='form-control' ></input>
            </div>
            <button  type='submit' className='btn btn-secondary mt-2' >Edit</button>
        </form>
      </div>
    </div>
  )
}

export default Edit
