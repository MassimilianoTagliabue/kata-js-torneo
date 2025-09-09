import { faker } from "@faker-js/faker"; //faker libreria che genera dati finti

const fighters = generateFighters().map((curItem) => curItem);


//andiamo a generare una array di oggetti (il numero di oggetti è casuale) formato da nomi casuali e numeri casuale
  function generateFighters() {
    const numFighters = Math.floor(Math.random() * 20) + 1;

    //Array.from  crea un array vuoto della lunghezza che decidi(in questo caso il numero generato).
    return Array.from({ length: numFighters }, () => ({
      
      name: faker.person.firstName(),
      power: Math.floor(Math.random() * 100) + 1
    }))
  }

  
  
  export default fighters;