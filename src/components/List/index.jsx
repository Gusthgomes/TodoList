import React from 'react'

const List = ({todo}) => {
  return (
    <div className='todo'>
        <div className='content'>
            <p>{todo.text}</p>
            <p>({todo.category})</p>
        </div>
        <div>
            <button>Completar</button>
            <button>X</button>
        </div>
    </div>
  )
}

export default List;