import { faker } from "@faker-js/faker";

const participants = [generateFighters()];


//andiamo a generare una array di oggetti (il numero di oggetti è casuale) formato da nomi casuali e numeri casuale
  function generateFighters() {
    const numFighters = Math.floor(Math.random() * 50) + 1;

    //Array.from  crea un array vuoto della lunghezza che decidi(in questo caso il numero generato).
    return Array.from({ length: numFighters }, () => ({
      //faker libreria che genera dati finti
      name: faker.person.firstName(),
      power: Math.floor(Math.random() * 100) + 1
    }))
  }

  export default participants;