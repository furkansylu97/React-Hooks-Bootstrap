import React from 'react'
import { useState } from 'react'

export const CreateTask = () => {

  const [task, setTask] = useState({
    title:'',
    content:'',
  })

  function detectChange(event) {
    const {name, value} = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]:value,
      }
    })
  }

  return (
    <div className='CreateTaskWrapper'>
        <form className='CreateTaskForm'>
            <input 
            type="text" 
            className='form-control TodoText mb-3'
            name='title'
            placeholder='Title'
            value={task.title}
            onChange={detectChange}
            />

            <textarea name="content"
            className='form-control TodoText mb-3'
            rows={3}
            placeholder='Please write your job'
            value={task.content}
            onChange={detectChange}
            ></textarea>

            <button className="btn btn-primary TodoButton">Add</button>
        </form>
    </div>
  )
}
