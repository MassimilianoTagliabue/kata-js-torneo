import { useEffect, useState } from "react";
import { faker, tr } from "@faker-js/faker";
import fighters from "./data/FightersArray";
import weapons from "./data/WeaponsArray";

const gun = {
  name: "",
  power: null,
  nameWeapon: "",
  multiplier: null
}

function App() {

  const [armedFighters, setArmedFighters] = useState([]);
  const [disabled, setDisabled] = useState(false);  //serve a disattivare il bottone dopo il click

  useEffect(() => {
    setArmedFighters(generatedArmedFighters());
  
  }, []);


  //usEffect momentaneo

  
  


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


                //fase 1 : scelta dell'arma

  //vado ad assegnare le armi ai combattenti
  function generatedArmedFighters() {

    const tempArray = [];   //array di appoggio

    fighters.forEach((curItem, index) => {

      const newgun = {
        ...gun,   //copio la struttura di gun
        name: curItem.name,
        power: curItem.power,
        nameWeapon: weapons[index].name,
        multiplier: weapons[index].multiplier
      };

      tempArray.push(newgun); //vado ad aggiungere la nuova arma

    })

    return tempArray;
  }



            //fase 2: allenamento

    function training () {

      const tempArray = armedFighters.map(curItem => ({

        ...curItem,
        power: curItem.power * curItem.multiplier
      }))

      console.log(tempArray);
      //vado a disattivare il bottone
      setDisabled(true);
      setArmedFighters(tempArray);
    }

      

        //fase 3: qualificazione
      
    function qualification (){
      const qualificated = armedFighters.filter(curItem => {
        //controllo quali fighters superano 2000
        if(curItem.power > 2000){
          return curItem
        }
      })

      console.log(qualificated);
      
      setArmedFighters(qualificated);
    }

    
    





  return (
    <>
      <h2 className='text-center '>ciao</h2>
      
      <button className="btn btn-primary mx-5 my-5" onClick={training} disabled={disabled}> allenamento</button>
      <button className="btn btn-primary mx-5 my-5" onClick={qualification}>qualifica</button>
    </>
  )
}

export default App
