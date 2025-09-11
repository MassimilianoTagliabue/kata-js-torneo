import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import fighters from "./data/FightersArray";
import weapons from "./data/WeaponsArray";


function App() {

  const [armedFighters, setArmedFighters] = useState([]);

  useEffect(() => {

  }, []);



  //genera un numero casuale
  function randomNum() {
    return Math.floor(Math.random() * 100);
  }

  
  const arraynum = [];
  //controlla che non venga scelto 2 volte lo stesso numero
  function duplicate(num) {

    if (arraynum.includes(num)) { //controllo se num è presente nell'array
      const arraynumLength = arraynum.length; //salvo la lunghezza di arraynum
      
      while (arraynumLength === arraynum.length) { //il ciclo continua fino a quando non viene aggiunto un nuovo elemento
      
        const num2 = randomNum(); //genero un nuovo numero
        if (!arraynum.includes(num2)) { // controllo se non è presente
          arraynum.push(num2);  //aggiungo il numero
        
        } 
      }

    } else {//se non è presente lo aggiungo
      arraynum.push(num);
    }
  }




  

  fighters.forEach((curItem) => {

    const num = randomNum();
    duplicate(num);


  });


  console.log(arraynum + " lunghezza" + arraynum.length);




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
