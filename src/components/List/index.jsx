import React from 'react';
import './list.css';

const List = ({todo, removeTodo, completedTodos}) => {
  return (
    <div className='todo'>
        <div className='content'>
            <p>{todo.text}</p>
            <p>({todo.category})</p>
        </div>
        <div className='buttons'>
            <button 
            onClick={ () => completedTodos(todo.id) }
            className='complete'
            >
              Completar
            </button>

            <button 
            onClick={ () => removeTodo(todo.id) }
            className='remove'
            >
              X
            </button>
        </div>
    </div>
  )
}

export default List;