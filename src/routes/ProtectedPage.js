import React from "react";
import { listPosts } from "../services/post";
import '../components/style/text.css'

function ProtectedPage() {
  const onSubmit = async (data) => {
    try {
      
      data.preventDefault()
      console.log(data.target);
      const form = new FormData(data.target)
      const name = form.get("name")
      console.log(name);
      const breed = form.get("breed")
      console.log(breed);
      const age = form.get("age")
      console.log(age);
      const species = form.get("species")
      console.log(species);
      const gender = form.get("gender")
      console.log(gender);
      const url = form.get("url")
      
      const cadPets = { name, breed, age, species, gender, url } 
      console.log(cadPets);
      alert("PET CADASTRADO COM SUCESSO!")
      await listPosts(cadPets);
      
    } catch (error) {
      console.log("DEU ALGUM ERRO");
      
    }
  }

   return (
    <div >
    <form onSubmit={(data) => onSubmit(data)} className="container-form">
      <h2>Cadastre seu pet aqui.</h2>
      Nome: <input type="text" name="name" placeholder=" digite o nome do seu pet" />
      Raça: <input type="text" name="breed" placeholder=" digite a raça do seu pet" />
      Idade: <input type="text" name="age" placeholder=" digite a idade do seu pet" />
      <select name="species" defaultValue="Macho">
          <option value="Cachorro">Cachorro</option>
          <option value="Felino">Felino</option>
          <option value="Réptil">Réptil</option>
          <option value="Roedor">Roedor</option>
      </select><br></br>
      <select name="gender" defaultValue="Macho">
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>  
      Foto do seu Pet: <input type="url" name="url"/>
      
      <button className="protect" >Cadastrar</button>  
     </form>
  </div>

  )
}

export default ProtectedPage;
