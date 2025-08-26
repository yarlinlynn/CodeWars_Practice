/*
Instructions:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// Solution:
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce( (acc, value) => acc + value, 0)
}

/*
Best rated solutions:

function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}

function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a+b,0)
}

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);

*/