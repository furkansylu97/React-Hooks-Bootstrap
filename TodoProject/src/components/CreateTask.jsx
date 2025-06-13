import React from 'react'

export const CreateTask = () => {
  return (
    <div className='CreateTaskWrapper'>
        <form className='CreateTaskForm'>
            <input 
            type="text" 
            className='form-control TodoText mb-3'
            name='title'
            placeholder='Title'
            />

            <textarea name="content"
            className='form-control TodoText mb-3'
            rows={3}
            placeholder='Please write your job'
            ></textarea>

            <button className="btn btn-primary TodoButton">Add</button>
        </form>
    </div>
  )
}
