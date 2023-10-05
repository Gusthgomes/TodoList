import React from 'react'
import './erro.css'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
      <div className='img'>
        <img src='404.png' alt='error' className='not'/>
      </div>
      <p>Ops!!!! Você se deu mal e foi para aonde não deveria......</p>
      <Link to="/">Clique aqui para voltar</Link>
    </div>
  )
}

export default Error
