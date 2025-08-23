
/*
Instructions:

You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1 + 7 + 12 = 20

Note
If there is nothing to sum, the sum is default to 0.
*/

// Solution:
function positiveSum(arr) {
  //filter out any positive numbers
  const positiveNumbers = arr.filter( number => number > 0)
  
  // add all the numbers to get the sum  
  const sum = positiveNumbers.reduce( (acc, sum) => acc + sum, 0)
  return sum
}

console.log( positiveSum([1,2,3,4,5]) ) //15
console.log( positiveSum([1,-2,3,4,5]) ) //13
console.log( positiveSum([]) ) //0
console.log( positiveSum([-1,-2,-3,-4,-5]) ) //0
console.log( positiveSum([-1,2,3,4,-5]) ) //9

/*
Best rated solutions:

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
  
*/