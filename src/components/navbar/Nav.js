import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <div className='container-nav'>
          <div className='text'>
             PET SHOP
              <img src= {require('../../image/Dog.png')}/>
              AMICÃO
              
          </div>
      <nav>
          <ul className='nav'>
              <li >Contato</li>
              <li>Cadastro</li>
              <li>Login</li>
          </ul>
      </nav>
     </div>
  )
}

export default Nav;
