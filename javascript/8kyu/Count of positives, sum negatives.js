/*
Instructions:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// Solution:
function countPositivesSumNegatives(input) {
  // check if array is empty
  if (input === null || input.length === 0) {
    return []
  }
  
  //keep count of positives
  let count = 0
  //sum all negatives
  let sum = 0
  
  //loop through array and separate positives and negatives
  for ( let i = 0; i < input.length; i++) {
    const num = input[i]
    //check if positive or negative
    if (num > 0) {
      count++
    } else if (num < 0) {
      sum += num
    }
  }
   return [count, sum]
}

/*
Best rated solutions:

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

function countPositivesSumNegatives(input) {
  return !input || !input.length ? [] : [
    input.filter(n => n > 0).length,
    input.filter(n => n < 0).reduce((a, b) => a + b)
  ];
}

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}

*/