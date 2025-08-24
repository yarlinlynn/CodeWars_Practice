/*
Instructions:
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

// Solution:
function findAverage(array) {
  // check if array is empty
  if (array.length === 0) { 
    return 0;
  } else {
    //adds all numbers in array
    let sum = array.reduce( (acc, c) => acc + c, 0);
    //gets the average
    return sum / array.length;
  }
  
}

/*
Best rated solutions:

const find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

*/