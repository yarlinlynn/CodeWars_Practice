/*
Instructions:
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/

// Solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let difference = dadYearsOld - (2 * sonYearsOld)
  return Math.abs(difference)
}

/*
Best rated solutions:

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

*/