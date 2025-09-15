
//fase 2: allenamento

    function training (armedFighters) {

      const tempArray = armedFighters.map(curItem => ({

        ...curItem,
        power: curItem.power * curItem.multiplier
      }))

      console.log(tempArray);
      
      return tempArray
      

    }

    export default training