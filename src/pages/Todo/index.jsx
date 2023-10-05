import { useState, useEffect } from 'react';
import './todo.css';
import TodoForm from '../../components/TodoForm';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConnection';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';

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
            alert(" Tarefa deletada com sucesso!")
        })
        .catch((error) => {
            alert("Ops! Algo deu errado... " + error)
        })
    }

    async function completedTodos(id) {
        const docRef = doc(db, "lista", id)
        await deleteDoc(docRef)
        .then(()=>{
            alert(" Tarefa concluída com sucesso!")
        })
        .catch((error) => {
            alert("Ops! Algo deu errado... " + error)
        })
    };

    async function handelUpdate(){
        const tarefaRef = collection(db, "lista")

        await getDocs(tarefaRef)
        .then((snapshot) => {
            let lista =[]
            snapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    tarefa: doc.data().tarefa,
                    categoria: doc.data().categoria
                })
            })

            setTarefas(lista)
            
        })
        .catch((error) => {
            console.log("Erro ao atualizar " + error)
        })
    }

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
                    setTodos([...lista])
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
            <div className='cabeca'>
                <h1>Lista de tarefas</h1>
                <button type="text" className='update' onClick={handelUpdate}>Atualizar</button>
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