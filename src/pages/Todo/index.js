import {useState} from 'react';

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
        <div>
            <h1>Todo list</h1>
            <div className='todoList'>
                {todos.map( (todo) => (
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
                ))}
            </div>

        </div>
    )
}