$(document).ready(() => {
  
  let character = {
    race: "",
    size: "",
    speed: "",
    alignment: "",
    profession: "",
    abilities: {
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: ""
    },
    saves: {
      fortitude: "",
      reflex: "",
      will: "",
    },
    healthPoints: ""
  };
  
  const races = [
    "Human",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Halfling"
  ];
  
  const professions = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Wizard"
  ];
  
  let playerStats = [];
  
  function getStats() {
    while(playerStats.length < 6) {
      let stat = diceRoll();
      if(stat < 8) {
        getStats();
      } else {
        playerStats.push(stat);
      }
    }
  }
  
  function diceRoll() {
    let diceArr = [];
    for(let i = 0; i < 4; i++) {
      let rand = Math.floor(Math.random() * 6) + 1;
      diceArr.push(rand);
    }
    diceArr.sort((a, b) => {return a - b;}).shift();
    return diceArr.reduce(getSum);
  }
  
  function getSum(total, num) {
    return total + num;
  }
  
  getStats();
  console.log(playerStats);
  
});