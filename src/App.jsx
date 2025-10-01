import { useEffect, useState } from "react";
import generatedArmedFighters from "./utils/GenerateArmedFighters";
import training from "./utils/Training";
import qualification from "./utils/Qualification";
import Tournament from "./utils/Tournament";
import { GlobalContext } from "./context/GlobalContext";
import FighterCard from "./components/FighterCard"




function App() {

  const [armedFighters, setArmedFighters] = useState([]);
  const [disabled, setDisabled] = useState(false);  //serve a disattivare il bottone dopo il click
  const [showWinner, setShowWinner] = useState(false);
  const [startedTournament, setStartedTournament] = useState(false);

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
    setStartedTournament(true)
  }



  const globalProviderValue = {
    armedFighters,
    setArmedFighters,
    disabled,
    setDisabled,
    handleTraining,
    handleQualification,
    startTournament,
  }

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <h2 className='text-center my-4'>Benvenuto al Torne Boolkaichi</h2>

      <div className="container " onChange={setArmedFighters}>

        <button className="btn btn-primary mx-5 my-5" onClick={handleTraining} disabled={disabled}> Allenamento</button>
        <button className="btn btn-primary mx-5 my-5" onClick={handleQualification}>Qualifica</button>
        <button className="btn btn-success mx-5 my-5" onClick={startTournament}>Inizia Torneo</button>

        {/* tasto visibile solo se il torneo è iniziato */}
        {startedTournament ? (
          <>
            <button className="btn btn-warning mx-5 my-5" onClick={() => { showWinner ? (setShowWinner(false)) : (setShowWinner(true)) }}>
              {showWinner ? ("Nascondi Classifica") : ("Mostra Classifica")}</button>
          </>
        ) : (
          <>
            <div className="alert alert-success col-6 mx-5 mb-3" role="alert">
              la classifica sarà visibile solo una volta iniziato il torneo
            </div>
          </>
        )}





        {showWinner ? (
          <>

          </>

        ) : (
          <>

            <div className="justify-content-center d-flex row mt-5">
              {armedFighters.length > 0 ? (
                <>
                  {armedFighters.map((curFighter, index) => {
                    return (
                      <div key={index} className="mb-5 col-3">


                        <FighterCard
                          fighter={curFighter}
                        />
                      </div>)
                  })}

                </>

              ) : (
                <>
                  <div className="alert alert-light" role="alert">
                    Nessun combattente presente al momento
                  </div>
                </>
              )}
            </div>

          </>)}

      </div>


    </GlobalContext.Provider>
  )
}

export default App
