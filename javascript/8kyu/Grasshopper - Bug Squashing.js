/*
Instructions:
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy health, and print status.

You are using a library that already has the functions below. Create a function named main (PlayTurn for C#) that calls the functions in the proper order stated before.
*/

// Solution:
var health = 100; var position = 0; var coins = 0

function main () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

/*
Best rated solutions:

let health = 100, position = 0, coins = 0
function main () {
  const actions = [rollDice,move,combat,getCoins,buyHealth,printStatus];
  actions.forEach(e => e());
}

let health = 100;
let position = 0;
let coins = 0;

const main = () =>
  [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(val => val());

*/