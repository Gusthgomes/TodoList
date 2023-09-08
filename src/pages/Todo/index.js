import {useState} from 'react';

export default function Todo(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(){
        if(name === "" || password === ""){
            alert("Por favor preencha os campos corretamente")
            setName('')
            setPassword('')
            return;
        }

        if(password.length <=6){
            alert("Sua senha deve contem mais de seis digitos")
            setName('')
            setPassword('')
            return;
        }
    }
    return(
        <div>
            <h1>Todo list</h1>
            <div>
                <label>Nome</label>
                <input type="text" 
                    placeholder="Seu nome"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                />

                <label>Senha</label>
                <input type="password" 
                    placeholder="*********"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Cadastrar</button>
            </div>
        </div>
    )
}