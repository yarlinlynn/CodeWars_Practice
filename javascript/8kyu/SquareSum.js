
/*
Instructions:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 
*/

// Solution:
function squareSum(numbers){
  return squaredNumbers = numbers.map( number => number * number).reduce( (acc, val) => acc + val, 0)
} 



/*
Best rated solutions:

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

function squareSum(numbers){
//   sqaure each number
  let squaredNumbers = numbers.map( number => number * number)
  
//   add squared number together
  return squaredNumbers.reduce( (acc, val) => acc + val, 0)
}

const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)

function squareSum(numbers) {
  return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
}

function squareSum(numbers){
 return numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
}

*/