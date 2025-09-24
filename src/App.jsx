import { useEffect, useState } from "react";
import { faker, tr } from "@faker-js/faker";
import generatedArmedFighters from "./utils/GenerateArmedFighters";
import training from "./utils/Training";
import qualification from "./utils/Qualification";
import Tournament from "./utils/Tournament";




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


  //fase 4: tournament
  function startTournament() {
    Tournament(armedFighters)
  }

  return (
    <>
      <h2 className='text-center '>Benvenuto al Torne Boolkaichi</h2>

      

      <button className="btn btn-primary mx-5 my-5" onClick={handleTraining} disabled={disabled}> allenamento</button>
      <button className="btn btn-primary mx-5 my-5" onClick={handleQualification}>qualifica</button>
      <button className="btn btn-success mx-5 my-5" onClick={startTournament}>inizia Torneo</button>
    </>
  )
}

export default App
