import React from 'react'

export const Task = (props) => {

const deleteClick = () => {
    props.onDelete(props.id)
}

  return (
    <div className='col-md-4 mb-4'>
        <div className='ContentWrapper'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className='btn btn-danger' onClick={deleteClick}>Delete</button>
        </div>
    </div>
  )
}
