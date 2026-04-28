/*
Instructions:
Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
*/

// Solution:
const flip=(d, a) => a.sort( (a, b) => d === "R" ? a-b : b-a)

/*
Best rated solutions:

const flip=(d, a)=>{
  if(d === "R") {
    return a.sort( (a, b) => a - b)
  } else {
    return a.sort( (a, b) => b - a) 
  }
}

const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)

*/