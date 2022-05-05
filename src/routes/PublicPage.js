import '../components/style/text.css';
import Cards from "../components/Cards/Cards";
import { useState, useEffect } from "react";
import { listPets } from "../services/pets";


function PublicPage() {

  const [pets, setPets] = useState([])
  
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        console.log(response.data.pets);
        setPets(response.data.pets)
        
      } catch (error) {
        console.log("NÃO DEU CERTO!");
      }
    };
    request();
  }, []);
  
  
  return (
    <div className='container-cards'>{
      pets.map(e => <Cards name={e.name}
        breed={e.breed} age={e.age}
        species={e.species}
        gender={e.gender}
        url={e.url}
        key={e.id} />)}
    </div>
  )
}

export default PublicPage;
