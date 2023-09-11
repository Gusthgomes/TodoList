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

    const addTodo = (text, category) => {
        const newTodos = [...todos, {
            id: Math.floor(Math.random() * 10000),
            text,
            category,
            isCompleted: false
        }
    ];

    setTodos(newTodos)
    }

    return(
        <div className='app'>
            <h1>Lista de tarefas</h1>
            <div className='todo'>
                {todos.map( (todo) => (
                    <List key={todo.id} todo={todo}/>
                ))}
            </div>
            <div className='todo-list'>
                <TodoForm addTodo={addTodo}/>
            </div>
                    
        </div>
    )
}