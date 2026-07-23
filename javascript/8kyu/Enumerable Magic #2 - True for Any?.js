/*
Instructions:
The task is to write a function that accepts two parameters: an array and a callback function (in Ruby: a block).

The function should return true if the callback function / block returns true for any item in the array, otherwise return false.

The function should return false if the array is empty.
*/

// Solution:
function any(arr, fun){
  return arr.some(fun)
}

/*
Best rated solutions:

const any = (arr, fun) => arr.some(fun);

function any(arr, fun){
  for (var i=0; i<arr.length; ++i)
    if (fun(arr[i]))
      return true;
  return false;
}

function any(arr, fun){
  return arr.filter(fun).length > 0;
}

*/