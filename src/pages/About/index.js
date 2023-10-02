import React from 'react'
import './sobre.css'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='sobre'>
      <div className='head'>
        <img src='foto.png' alt='foto' className='foto' />
        <h1>Sobre mim...</h1>

        <div className='info'>
          <p>
            Olá, me chamo Gustavo Gomes e tenho 27 anos, trabalho com programação já fazem 2 anos e tenho familiaridade com Python, React e Typescript. Essa aplicação foi construída usando React JS e sua utilização é criar listas de tarefas.
          </p>

          <p>
            Para mais informações favor mandar um e-mail para: gomesgustavo20@outlook.com
          </p>
        </div>
      
      <Link className='link' to="/">
        Voltar para home
      </Link>
      </div>
    </div>
  )
}

export default index
