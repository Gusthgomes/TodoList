import React, { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value === "" || category === "" || !value || !category){
            alert("Por favor preencha corretamente os campos")
            setValue('')
            setCategory('')
            return;
        }
    }

  return (
    <div className='todoForm'>
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Digite o título' 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />

            <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm