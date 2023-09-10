import React from 'react'

const TodoForm = () => {
  return (
    <div className='todoForm'>
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" placeholder='Digite o título' />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
            </select>
        </form>
    </div>
  )
}

export default TodoForm