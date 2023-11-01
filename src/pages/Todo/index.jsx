import { useState, useEffect } from 'react';
import './todo.css';
import TodoForm from '../../components/TodoForm';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConnection';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

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

    async function removeTodos(id) {
        const docRef = doc(db, "lista", id)
        await deleteDoc(docRef)
        .then(()=>{
            toast.success(" Tarefa deletada com sucesso!");
        })
        .catch((error) => {
            toast.error("Ops! Algo deu errado... " + error);
        })
    }

    async function completedTodos(id) {
        const docRef = doc(db, "lista", id)
        await deleteDoc(docRef)
        .then(()=>{
            toast.success(" Tarefa concluída com sucesso!");
        })
        .catch((error) => {
            toast.error("Ops! Algo deu errado... " + error);
        })
    };

    
    useEffect(() => {
        async function buscarTarefas() {
            const taskRef = collection(db, "lista")
            const onsub = onSnapshot(taskRef, (snapshot) => {
                
                let list = [];

                snapshot.forEach( (doc) => {
                    list.push({
                        id: doc.id,
                        tarefa: doc.data().tarefa,
                        categoria: doc.data().categoria
                    })
                })
                setTarefas(list)
            })
        }
        buscarTarefas();
    }, [])

    return (
        <div className='app'>
            <div className='cabeca'>
                <h1>LISTA DE TAREFAS</h1>
            </div>
            
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
                                        onClick={() => completedTodos(tarefa.id)}
                                        className='complete'
                                    >
                                        Completar
                                    </button>

                                    <button
                                        onClick={() => removeTodos(tarefa.id)}
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