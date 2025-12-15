/*
Instructions:
Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

Examples
(1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
(1, 15, 20) -> [1]

*/

// Solution:
function generateRange(min, max, step){
  let nums = [];
  for (let i = min; i <= max; i += step) {
    nums.push(i);
  }
  return nums;
}

/*
Best rated solutions:

function generateRange(min, max, step){
  var arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr
}

*/