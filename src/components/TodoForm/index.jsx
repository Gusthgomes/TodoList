import React, { useState } from 'react'
import './todo.css'
import { db } from '../../firebaseConnection';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(value === "" || category === "" || !value || !category){
            alert("Por favor preencha corretamente os campos")
            setValue('');
            setCategory('');
            return;
        }

        if(value.length <= 0 || category.length <= 0){
            alert("dados indefinidos, favor corrigir!")
            setValue('');
            setCategory('');
            return;
        }
        addDoc(collection(db, "lista"), {

            tarefa: value,
            categoria: category,
        })
        .then( () => {
            alert("Tarefa cadastrada com sucesso!")
        })
        .catch( (error) => {
            console.error("Algo deu errado " + error )
        })

        addTodo(value, category);
        setValue('');
        setCategory('');
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