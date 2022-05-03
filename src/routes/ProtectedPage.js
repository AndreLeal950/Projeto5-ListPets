import React from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";
import '../components/style/text.css'

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        console.log(response.data);
      } catch (error) {
        console.log("Deu Ruim");
      }
    };
    request();
  }, []);

  return (
    <div >
    <form className="container-form">
      <h2>Cadastre seu pet aqui.</h2>
      <label htmlFor="nome">Nome: </label>
      <input type="text" name="nome" placeholder=" digite o nome do seu pet" />
      <br></br>
      <label htmlFor="race"> Raça:   </label>
      <input type="text" name="race" placeholder=" digite a raça do seu pet" />
      <br></br>
      <label htmlFor="age"> Idade:   </label>
      <input type="text" name="age" placeholder=" digite a idade do seu pet" />
      <br></br>
      <label htmlFor="species"> Espécie:   </label>
      <input type="text" name="species" placeholder=" digite a espécie do seu pet" />  
      <br></br>
      <label htmlFor="gender"> Sexo:   </label>
      <input type="text" name="gender" placeholder=" digite o sexo do seu pet" />
      <br></br>
      <label htmlFor="url"> Url:   </label>
      <input type="text" name="url" placeholder=" cole aqui o endereço com a foto do seu pet"/>  
      <br></br>
      <button className="protect">Cadastrar</button>  
     </form>
  </div>

  )
}

export default ProtectedPage;
