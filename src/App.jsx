import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";


function App() {

  const [participants, setParticipants] = useState(null);
  const [fighters, setFighters]= useState([])

  useEffect(() =>{
    NumParticipants();
    setFighters(generateName())
    console.log(fighters);
    
  },[]);

  //genera un numero casuale di partecipanti
  function NumParticipants(){
    setParticipants(Math.floor(Math.random() * 50) + 1);
  }
  
  //andiamo a generare dei nomi casuali in base al numero di partecipanti
  function generateName(participants){
    return Array.from({ length:  participants}, () => faker.person.firstName());
  } 

  


  return (
    <>
      <h2 className='text-center '>ciao</h2>
      {/* <ul>
        {fighters.map((name, id) =>(
          <li key={id}>{name}</li>
        ))} 
      </ul>*/}
    </>
  )
}

export default App
