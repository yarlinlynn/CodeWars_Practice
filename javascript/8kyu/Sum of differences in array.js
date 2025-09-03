/*
Instructions:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

// Solution:
function sumOfDifferences(arr) {
//   check if array is empty
  if(arr.length <= 1) {
    return 0
  }
//   sort array
  let sortedArray = arr.sort( (a,b) => b - a)
//   return the sum of two pairs
  let sum = 0
  for ( let i = 0; i < sortedArray.length - 1; i++) {
     sum += (sortedArray[i] - sortedArray[i + 1]);
  }
  
   return sum
}

/*
Best rated solutions:

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const sumOfDifferences = arr => arr.sort((a, b) => b - a).map((a, i) => a - arr[i + 1] || 0).reduce((a, b) => a + b, 0);

const sumOfDifferences = arr => arr.sort((a, b) => b - a).shift() - arr.pop() || 0;

*/