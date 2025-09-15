import fighters from "../data/FightersArray";
import weapons from "../data/WeaponsArray";

//fase 1 : scelta dell'arma

const gun = {
  name: "",
  power: null,
  nameWeapon: "",
  multiplier: null
}

  //vado ad assegnare le armi ai combattenti
  function generatedArmedFighters() {
    
    const tempArray = [];   //array di appoggio

    fighters.forEach((curItem, index) => {
      

      const newgun = {
        ...gun,   //copio la struttura di gun
        name: curItem.name,
        power: curItem.power,
        nameWeapon: weapons[index].name,
        multiplier: weapons[index].multiplier
      };

      tempArray.push(newgun); //vado ad aggiungere la nuova arma

    })

    //console.log(tempArray);
    

    return tempArray;
  }

  export default generatedArmedFighters