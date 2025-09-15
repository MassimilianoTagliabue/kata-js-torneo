import randomNum from "../utils/generateNumber";

const nameWeapons = [
  "Nightfall", "Skyfall", "Bloodthorn", "Thunderclap Dagger",
  "Shadowstrike Dagger", "Vortex Blaster", "Eclipse Axe", "Phantom Bow",
  "Thunderfist Gauntlets", "Starfire Longsword", "Dragonfang Spear",
  "Serpent’s Kiss", "Dragon’s Claw", "Frostbite Blade", "Stormbringer Blade",
  "Phantom Reaver", "Soulreaper Blade", "Shadowstrike Sabre"
];

// Combinazione e variazione creativa per generare almeno 100 unici
const generateName = () => {
  const base = nameWeapons[randomNum(nameWeapons.length)];
  const suffissi = ["of Doom", "of Shadows", "Prime", "Alpha", "X", "Mk II"];
  const suffisso = suffissi[randomNum(suffissi.length)];
  return `${base} ${suffisso}`;
};

const weapons = Array.from({ length: 20 }, () => ({
  name: generateName(),
  multiplier: randomNum(100) + 1
}));

//console.log(weapons);


export default weapons;