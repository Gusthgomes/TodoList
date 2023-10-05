import React from 'react';

const List = ({tarefas, removeTodo, completedTodos}) => {
  return (
    <div className='todo'>
        <div className='content'>
            <p>{tarefas.text}</p>
            <p>({tarefas.category})</p>
        </div>
        <div className='buttons'>
            <button 
            onClick={ () => completedTodos(tarefas.id) }
            className='complete'
            >
              Completar
            </button>

            <button 
            onClick={ () => removeTodo(tarefas.id) }
            className='remove'
            >
              X
            </button>
        </div>
    </div>
  )
}

export default List;