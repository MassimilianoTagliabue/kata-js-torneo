const nameWeapons = [
  "Nightfall", "Skyfall", "Bloodthorn", "Thunderclap Dagger",
  "Shadowstrike Dagger", "Vortex Blaster", "Eclipse Axe", "Phantom Bow",
  "Thunderfist Gauntlets", "Starfire Longsword", "Dragonfang Spear",
  "Serpent’s Kiss", "Dragon’s Claw", "Frostbite Blade", "Stormbringer Blade",
  "Phantom Reaver", "Soulreaper Blade", "Shadowstrike Sabre"
];

// Combinazione e variazione creativa per generare almeno 100 unici
const generateName = () => {
  const base = nameWeapons[Math.floor(Math.random() * nameWeapons.length)];
  const suffissi = ["of Doom", "of Shadows", "Prime", "Alpha", "X", "Mk II"];
  const suffisso = suffissi[Math.floor(Math.random() * suffissi.length)];
  return `${base} ${suffisso}`;
};

const weapons = Array.from({ length: 100 }, () => ({
  name: generateName(),
  multiplier: Math.floor(Math.random() * 100) + 1
}));



export default weapons;