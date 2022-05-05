import React from 'react'
import '../style/Cards.css'


const Cards = (props) => {
    const { name, breed, age, species, gender, url} = props
  return (
    <div >
      <div className='container-cards'>
         <img src={url} alt="" className='img-cards'/>
          <p>Nome: {name}</p>
          <p>Raça: {breed}</p>
          <p>Idade: {age}</p>
          <p>Especie: {species}</p>
          <p>Sexo: {gender}</p>
      </div>
      
    </div>
  )
}

export default Cards;
