import { useEffect, useState } from "react";
import { faker, tr } from "@faker-js/faker";
import generatedArmedFighters from "./utils/GenerateArmedFighters";
import training from "./utils/Training";
import qualification from "./utils/Qualification";




function App() {

  const [armedFighters, setArmedFighters] = useState([]);
  const [disabled, setDisabled] = useState(false);  //serve a disattivare il bottone dopo il click

  useEffect(() => {
    setArmedFighters(generatedArmedFighters());

  }, []);


  //fase 2: training
  function handleTraining() {
    setArmedFighters(training(armedFighters));

    //vado a disattivare il bottone 
    setDisabled(true);
  }


  //fase 3: qualification
  function handleQualification() {
    setArmedFighters(qualification(armedFighters))
  }


  //fase 4: combattimento

  function Fight(player1, player2) {
    //operatore ternario che controlla il vincitore
    return (player1 >= player2) ? player1 : player2;
  }


  // gioca un round: restituisce sia i vincitori che i perdenti
  function playRound(players) {
    let winners = []
    let losers = []
    

    for (let i = 0; i < players.length; i += 2) {
      const p1 = players[i];
      const p2 = players[i + 1];

      const winner = Fight(p1, p2);
      console.log("round vinto da " + winner.name);
      

      winners.push(winner);
      losers.push(winner === p1 ? p2 : p1);
      console.log("round perso da " + losers);
    } 

    return { winners, losers }
  }

  //struttura del torneo
  function Tournament(fighters) {
    console.log(fighters);
    let players = [...fighters];
    let semiFinalLosers = [];
    let round = 1;
    let second;

    while (players.length > 1) {

      console.log("round N° " + round);
      const { winners, losers } = playRound(players);


      // controllo di sicurezza: se playRound non riduce il numero, evito loop infinito
      if (winners.length === players.length) {
        console.error("Errore: playRound non ha ridotto il numero di giocatori. Interrompo il torneo per evitare loop infinito.");
        break;
      }

      // se sto giocando le semifinali, i 'losers' faranno lo spareggio per il 3° posto
      if (players.length === 4) {
        semiFinalLosers = [...losers];
      }

      if(players.length === 2){
        second = losers[0];
      }

      //aggiorno players per evitare un loop infinito
      players = winners;

      //se i partecipanti sono dispari aggiungo un bot
      if(players.length % 2 === 1 && players.length !== 1){
        console.log("dispari");
        
        players.push({
          name: "robot",
          power: 4000
        })}

      round++;
    }

    
    //stabilisco il campione
    let champion = players[0];
    let third;
    
    
    //spareggio per il 3° posto
    if(semiFinalLosers === 2){
      third = Fight(semiFinalLosers[0], semiFinalLosers[1]);
      console.log(`🥉 Terzo posto: ${third.name}`);
    }

    console.log("Vicitore = " + champion.name);
    console.log("Secondo Posto = " + second.name);
    //console.log("Secondo Posto = " + second.name);


  }



  function startTournament() {
    Tournament(armedFighters)
  }

  return (
    <>
      <h2 className='text-center '>ciao</h2>

      <button className="btn btn-primary mx-5 my-5" onClick={handleTraining} disabled={disabled}> allenamento</button>
      <button className="btn btn-primary mx-5 my-5" onClick={handleQualification}>qualifica</button>
      <button className="btn btn-success mx-5 my-5" onClick={startTournament}>inizia Torneo</button>
    </>
  )
}

export default App
