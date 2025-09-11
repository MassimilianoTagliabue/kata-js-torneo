import { faker } from "@faker-js/faker"; //faker libreria che genera dati finti

const fighters = generateFighters().map((curItem) => curItem);


//andiamo a generare una array di oggetti formato da nomi casuali e numeri casuale
  function generateFighters() {
  
    
    //Array.from  crea un array vuoto della lunghezza che decidi.
    return Array.from({ length: 20 }, () => ({
      
      name: faker.person.firstName(),
      power: Math.floor(Math.random() * 100) + 1
    }))
  }

  
  
  export default fighters;