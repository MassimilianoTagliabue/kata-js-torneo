
//fase 3: qualificazione
      
    function qualification (armedFighters){
      const qualificated = armedFighters.filter(curItem => {
        //controllo quali fighters superano 2000
        if(curItem.power > 2000){
          return curItem
        }
      })

      console.log(qualificated);

      //se i partecipanti sono dispari aggiungo un bot
      if(qualificated.length % 2 === 1 ){
        console.log("dispari");
        
        qualificated.push({
          name: "robot",
          power: 4000
        })

        console.log(qualificated);
        
      }

      return qualificated;
      
    }

    export default qualification