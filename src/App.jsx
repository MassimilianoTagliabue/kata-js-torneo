import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import partecipants from "./data/FightersArray";


function App() {

  const [fighters, setFighters] = useState([])
  

  useEffect(() => {

    setFighters(partecipants);

  }, []);

console.log(fighters);

  


  


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
