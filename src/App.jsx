import { useEffect, useState } from "react";
import generatedArmedFighters from "./utils/GenerateArmedFighters";
import training from "./utils/Training";
import qualification from "./utils/Qualification";
import Tournament from "./utils/Tournament";
import { GlobalContext } from "./context/GlobalContext";
import FighterCard from "./components/FighterCard";
import Confetti from "react-confetti";


const turnBtn = {
  btnTraining: false,
  btnQualification: true,
  btnStart: true
}


function App() {

  const [armedFighters, setArmedFighters] = useState([]);
  const [turnOff, setTurnOff] = useState(turnBtn);  //serve a disattivare il bottone dopo il click
  const [showWinner, setShowWinner] = useState(false);
  const [startedTournament, setStartedTournament] = useState(false);
  const [winners, setWinners] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);


  useEffect(() => {
    setArmedFighters(generatedArmedFighters());

  }, []);

  useEffect(() => {
    console.log(winners);

  }, [winners])


  //fase 2: training
  function handleTraining() {
    setArmedFighters(training(armedFighters));

    //vado a disattivare il bottone 
    setTurnOff(btn => ({
      ...btn,
      btnTraining: true,
      btnQualification: false
    }));

  }


  //fase 3: qualification
  function handleQualification() {
    setArmedFighters(qualification(armedFighters))
    setTurnOff(btn => ({
      ...btn,
      btnStart: false,
      btnQualification: true
    }));
  }


  //fase 4: tournament

  function startTournament() {
    const [champion, second, third] = Tournament(armedFighters);

    const tempWinner = [champion, second, third];
    //console.log(tempWinner);

    setWinners(tempWinner)




    setStartedTournament(true)
    setTurnOff(btn => ({
      ...btn,
      btnStart: true
    }));
    // 
  }



  const globalProviderValue = {
    armedFighters,
    setArmedFighters,
    turnOff,
    setTurnOff,
    handleTraining,
    handleQualification,
    startTournament,
  }

  return (
    <GlobalContext.Provider value={globalProviderValue}>
      <h2 className='text-center my-4'>Benvenuto al Torne Boolkaichi</h2>


      <div className="container " onChange={setArmedFighters}>

        <button className="btn btn-primary mx-5 my-5" onClick={handleTraining} disabled={turnOff.btnTraining}> Allenamento</button>
        <button className="btn btn-primary mx-5 my-5" onClick={handleQualification} disabled={turnOff.btnQualification}>Qualifica</button>
        <button className="btn btn-success mx-5 my-5" onClick={startTournament} disabled={turnOff.btnStart}>Inizia Torneo</button>

        {/* tasto visibile solo se il torneo è iniziato */}
        {startedTournament ? (
          <>
            <button className="btn btn-warning mx-5 my-5" onClick={() => {
              showWinner ? (setShowWinner(false)) : (setShowWinner(true));

              if(!showWinner){
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
              }
            }}>
              {showWinner ? ("Nascondi Classifica") : ("Mostra Classifica")}</button>
          </>
        ) : (
          <>
            <div className="alert alert-success col-6 mx-5 mb-3" role="alert">
              la classifica sarà visibile solo una volta iniziato il torneo
            </div>
          </>
        )}

        {/* 🎉 Confetti (si attiva solo quando showConfetti è true) */}
        {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

        {showWinner ? (
          <>
            {winners.map((winner, index) => {
              return (
                <div key={index} className="mb-5 col-3">


                  <FighterCard
                    fighter={winner}
                  />
                </div>)
            })}
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
