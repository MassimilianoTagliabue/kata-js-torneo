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
    if (player1.power > player2.power) {
      return player1
    } else if (player2.power > player1.power) {
      return player2
    } else {
      return player1
    }
  }


  function playRound(armedFighters) {
    let winners = []
    for(let i=0; i<armedFighters.length; i+= 2){
      
      winners.push(Fight(armedFighters[i], armedFighters[i + 1]));
    }
    return winners
  }


  function Tournament(armedFighters) {
    let round = 1;
    while(armedFighters.length > 1){
      console.log("round N° " + round + armedFighters);
      setArmedFighters(playRound(armedFighters));
      round++;
    }
    //console.log("Vincitore " + armedFighters);
    
  }

  function startTournament(){
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
