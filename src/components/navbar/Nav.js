import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Nav.css'

const Nav = () => {
  return (
      <div className='container-nav'>
          <div className='text'>
             PET SHOP
              <img className='img-nav' src= {require('../../image/Dog.png')}/>
              AMICÃO
              
          </div>
      <nav>
          <ul className='nav'>
              <li><Link to="/" className='nav'>Home</Link></li>
              <li><Link to="/login" className='nav'>Cadastro</Link></li>
              <li><Link to="/login" className='nav'>Login</Link></li>
          </ul>
      </nav>
     </div>
  )
}

export default Nav;
