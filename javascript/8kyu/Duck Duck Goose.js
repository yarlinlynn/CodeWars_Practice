/*
Instructions:
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
name is a property of Player objects, e.g Player.name

Example:
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

Random input limits:
- 6 ≤ Players ≤ 50
- 5000 ≤ Position ≤ 50000
*/

// Solution:
const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

/*
Best rated solutions:

function duckDuckGoose(players, goose) {
  let circle = goose;
  while(players.length < circle) {
    circle -= players.length
  }
  return players[circle - 1 ].name
}

function duckDuckGoose(players, goose) {
  for (var i = 0; i < players.length; i++) {
    if (i === (goose-1) % players.length) {
      return players[i].name;
    }
  }
}

*/