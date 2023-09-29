import React from 'react'
import './erro.css'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <p>Ops!!!! Você se deu mal e foi para aonde não deveria......</p>
      <Link to="/">Clique aqui para Home</Link>
    </div>
  )
}

export default Error
