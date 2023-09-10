import {useState} from 'react';
import './todo.css';
import List from '../../components/List';
import TodoForm from '../../components/TodoForm';

export default function Todo(){

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'criar fincionalidades X no sistema',
            category: 'trabalho',
            isCompleted: false,
        },
        {
            id: 2,
            text: 'Estudar Next JS',
            category: 'Estudos',
            isCompleted: false,
        },
        {
             id: 3,
            text: 'Implementar o Localstorage no projeto',
            category: 'Trabalho',
            isCompleted: false,
        }
    ]);

    return(
        <div className='app'>
            <h1>Lista de tarefas</h1>
            <div className='todoList'>
                {todos.map( (todo) => (
                    <List todo={todo}/>
                ))}
            </div>
                    <TodoForm/>
        </div>
    )
}