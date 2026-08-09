/*
Instructions:
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

// Solution:
function uefaEuro2016([team1, team2], [score1, score2]){
  if(score1 === score2) {
    return `At match ${team1} - ${team2}, teams played draw.`
  }
  
  let winnerTeam = score1 > score2 ? team1: team2;
  return `At match ${team1} - ${team2}, ${winnerTeam} won!`
}

/*
Best rated solutions:

function uefaEuro2016(commands, scores){
  if (scores[0] == scores[1])
    return `At match ${commands[0]} - ${commands[1]}, commands played draw.`;
  if (scores[0] < scores[1])
    return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
  return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
}

function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2 ? `At match ${team1} - ${team2}, teams played draw.` : `At match ${team1} - ${team2}, ${winner} won!`
}

const uefaEuro2016 = (c, s) => `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;

*/