import { useState, useEffect } from 'react';
import './todo.css';
import TodoForm from '../../components/TodoForm';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConnection';
import { getDocs, collection } from 'firebase/firestore';

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [tarefas, setTarefas] = useState([]);

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

    useEffect(() => {
        async function buscarTarefas() {
            const taskRef = collection(db, "lista")
            await getDocs(taskRef)
                .then((snapshot) => {
                    let lista = []
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            categoria: doc.data().categoria
                        })
                    })

                    setTarefas(lista);
                    console.log("Itens carregados!")

                })
                .catch((error) => {
                    console.error("Não foi possível buscar as informações do banco " + error)
                })
        }
        buscarTarefas();
    }, [])

    return (
        <div className='app'>
            <h1>Lista de tarefas</h1>
            {tarefas.length === 0 ?
                <div className='empty'> Você não possui nenhuma tarefa no momento! </div> : <div className='todo'>
                    {tarefas.map((tarefa) => {
                        return (
                            <div key={tarefa.id} className='content'>

                                <div className='paragrafo'>
                                    <p>{tarefa.tarefa}</p>
                                    <p>({tarefa.categoria})</p>
                                </div>
                                
                                <div className='areaButton'>
                                    <button
                                        //onClick={() => completedTodos(tarefas.id)}
                                        className='complete'
                                    >
                                        Completar
                                    </button>

                                    <button
                                        //onClick={() => removeTodo(tarefas.id)}
                                        className='remove'
                                    >
                                        X
                                    </button>
                                </div>
                            </div>

                        )
                    })}
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