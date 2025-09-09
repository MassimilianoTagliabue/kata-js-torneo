import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import fighters from "./data/FightersArray";
import weapons from "./data/WeaponsArray";


function App() {


  useEffect(() => {
    
  }, []);

  function randomNum() {
    return Math.floor(Math.random() * 100) -1 ;
  }
  
  const arraynum = [];

  const armed = fighters.map((curItem) => {

    const num = randomNum();
    console.log(num);
    

    if(!arraynum.includes(num)){
      arraynum.push(num);
    }else{

      console.log("presente" + num);
      
    }
    
  });

  console.log(arraynum);
  
  


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
