import { faker } from "@faker-js/faker"; //faker libreria che genera dati finti
import randomNum from "../utils/generateNumber";

const fighters = generateFighters().map((curItem) => curItem);


//andiamo a generare una array di oggetti formato da nomi casuali e numeri casuale
  function generateFighters() {
  
    
    //Array.from  crea un array vuoto della lunghezza che decidi.
    return Array.from({ length: 20 }, () => ({
      
      name: faker.person.firstName(),
      power: randomNum(100) + 1
    }))
  }

  //console.log(fighters);
  
  
  export default fighters;