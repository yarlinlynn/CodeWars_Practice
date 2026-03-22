/*
Instructions:
Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.
*/

// Solution:
function priceIsRight(numbers, target) {
  const newArr = numbers.filter(num => num <= target);
  
  if(newArr.length === 0) return undefined;
  
  return Math.max(...newArr);
}

/*
Best rated solutions:

function priceIsRight(numbers, target) {
  if (target < Math.min(...numbers)) return undefined
  else return Math.max(...numbers.filter(item => item <= target))
}

function priceIsRight(numbers, target) {
  return numbers.sort((a,b) => b - a).find(el => el <= target)
}

*/