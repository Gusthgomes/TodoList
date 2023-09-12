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

    const removeTodos = (id) => {
        const newTodos = [...todos]
        const filterTodos = newTodos.filter(todo => 
            todo.id !== id ? todo : null);
            alert("Tarefa deletada com sucesso!")
        setTodos(filterTodos);
    }

    const completedTodos = (id) => {
        const newTodos = [...todos];
        const filter = newTodos.filter(todo => 
            todo.id !== id ? todo : null);
        alert("Tarefa concluída com sucesso!!")
        setTodos(filter);
    };

    return(
        <div className='app'>
            <h1>Lista de tarefas</h1>
            <div className='todo'>
                {todos.map( (todo) => (
                    <List 
                        key={todo.id} 
                        todo={todo} 
                        removeTodo={removeTodos}
                        completedTodos={completedTodos}
                    />
                ))}
            </div>
            <div className='todo-list'>
                <TodoForm addTodo={addTodo}/>
            </div>
                    
        </div>
    )
}