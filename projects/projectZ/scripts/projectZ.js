// *** --- Fighters and Villains --- *** //

// RARITY
var numRarity = Math.floor(Math.random() * 18) + 1;
var rarity;

//Hero Class
var numFighterClass = Math.floor(Math.random() * 18) + 1;
var fighter = ["Goku", "Vegeta", "Gohan"];

// Villain Class
var numVillainClass = Math.floor(Math.random() * 18) + 1;
var villain = ["Frieza", "Cell", "Buu"];

// STATS
var strengthStat;
var healthStat;
var staminaStat;
var kiStat;
var speedStat;

// primary stat variables
var strength;
var health;
var stamina;
var ki;
var speed;

// start health
var heroStartHealth;
var enemyStartHealth;

// Characters

var fighterCharacter;
var villainCharacter;



// *** ---  RARITY --- *** //

function rollRarity() {
    // generate number between 1 - 20
    numRarity = Math.floor(Math.random() * 20) + 1
    console.log(numRarity);
    
    
    // Rarities for Characters
    if (numRarity <= 10) {
      // 50% chance for Strongest, Goku
      console.log("Goku, roll between 1 - 10 = 50% chance.");
      rarity = "Goku";

    } else if (numRarity <= 15) {
      // 25% chance for Second Best, Vegeta
      console.log("Vegeta, roll between 11 - 15 = 25% chance.");
      rarity = "Vegeta";


    } else {
      // 25% chance for Son of the Strongest, roll 18 = 5% chance.
      console.log("Gohan, roll between 16 - 20 = 25% chance.");
      rarity = "Gohan";
 
    return rarity;
  } // end of function
  
  
  // STATS BASED ON RARITY
function adjustRarityStats() {
  if (rarity == "Goku") {
 
    strength = strength + 15;
    health = health + 50;
    stamina = stamina + 8;
    ki = ki + 1;
    speed = speed + 3;

  } else if (rarity == "Vegeta") {

    strength = strength + 11;
    health = health + 40;
    stamina = stamina + 6;
    ki = ki + Math.floor(Math.random())
    speed = speed + 2;

  } else if (rarity == "Gohan") {
    
    strength = strength + 12
    health = health + 45
    stamina = stamina + 6
    ki = ki + Math.floor(Math.random())
    speed = speed + 2;

} //end Function
