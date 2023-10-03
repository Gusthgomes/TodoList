import { useState } from 'react';
import './todo.css';
import List from '../../components/List';
import TodoForm from '../../components/TodoForm';
import { Link } from 'react-router-dom';

export default function Todo() {

    const [todos, setTodos] = useState([]);

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
        alert("Tarefa concluída com sucesso!")
        setTodos(filter);
    };

    return (
        <div className='app'>
            <h1>Lista de tarefas</h1>
            {todos.length === 0 ?
                <div className='empty'> Você não possui nenhuma tarefa no momento! </div> : <div className='todo'>
                    {todos.map((todo) => (
                        <List
                            key={todo.id}
                            todo={todo}
                            removeTodo={removeTodos}
                            completedTodos={completedTodos}
                        />
                    ))}
                </div>}

            <div className='todo-list'>
                <TodoForm addTodo={addTodo} />
            </div>
            <footer>
                <div className='header'>
                    <Link to="/sobre">Para mais informações clique aqui!</Link>
                </div>
            </footer>

        </div>
    )
}