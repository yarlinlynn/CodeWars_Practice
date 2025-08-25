/*
Instructions:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
*/

// Solution:
function countBy(x, n) {
  const result = []; // Initialize an empty array to store the multiples.
  for (let i = 1; i <= n; i++) { // Loop 'n' times, starting from 1.
    result.push(x * i); // Calculate the current multiple (x * i) and add it to the array.
  }
  return result;
}

/*
Best rated solutions:

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

function countBy(x, n) {
  var z = [];
  while (z.length < n) z.push(x * (z.length + 1));
  return z;
}

*/