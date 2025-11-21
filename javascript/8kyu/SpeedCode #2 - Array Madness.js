/*
Instructions:
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g. arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

// Solution:
const arrayMadness = (a, b) => a.reduce((sum, num) => sum + num * num, 0) > b.reduce((sum, num) => sum + num * num * num, 0)

/*
Best rated solutions:

function arrayMadness(a, b) {
  return a.reduce((x,y) => x + y ** 2, 0) > b.reduce((x,y) => x + y ** 3, 0) ? true : false
}

const arrayMadness = (a, b) => {
  let squares = a.reduce((sum, num) => sum + num * num, 0);
  let cubes = b.reduce((sum, num) => sum + num * num * num, 0);
  return squares > cubes;
}

*/