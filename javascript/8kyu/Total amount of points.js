/*
Instructions:
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

// Solution:
function points(games) {
  let total = 0;

  for (let game of games) {
    let [x, y] = game.split(":").map(Number);
    total += x > y ? 3 : x === y ? 1 : 0;  // ternary
  }

  return total;
}

/*
Best rated solutions:

function points(games) {
  let total = 0;

  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(":").map(Number);

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    } // else loss, +0
  }

  return total;
}

const points = games =>
  games.reduce((sum, game) => {
    let [x, y] = game.split(":").map(Number);
    return sum + (x > y ? 3 : x === y ? 1 : 0);
  , 0);

const points = games => games .map(game => {
    let [x, y] = game.split(":").map(Number);
    return x > y ? 3 : x === y ? 1 : 0;
})
.reduce((a, b) => a + b, 0);

const points = games => games.reduce((s, g) => s + (g[0] > g[2] ? 3 : g[0] === g[2] ? 1 : 0), 0);

*/