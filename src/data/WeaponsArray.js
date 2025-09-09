const nameWeapons = [
  "Nightfall", "Skyfall", "Bloodthorn", "Thunderclap Dagger",
  "Shadowstrike Dagger", "Vortex Blaster", "Eclipse Axe", "Phantom Bow",
  "Thunderfist Gauntlets", "Starfire Longsword", "Dragonfang Spear",
  "Serpent’s Kiss", "Dragon’s Claw", "Frostbite Blade", "Stormbringer Blade",
  "Phantom Reaver", "Soulreaper Blade", "Shadowstrike Sabre"
];

// Combinazione e variazione creativa per generare almeno 100 unici
const generataName = () => {
  const base = nomiArmi[Math.floor(Math.random() * nomiArmi.length)];
  const suffissi = ["of Doom", "of Shadows", "Prime", "Alpha", "X", "Mk II"];
  const suffisso = suffissi[Math.floor(Math.random() * suffissi.length)];
  return `${base} ${suffisso}`;
};

const Weapons = Array.from({ length: 100 }, () => ({
  name: generateName(),
  multiplier: Math.floor(Math.random() * 100) + 1
}));

console.log(Weapons);