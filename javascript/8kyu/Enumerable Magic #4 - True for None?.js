/*
Instructions:
Write a function that takes two arguments: an array and a callback function.

The function should return true if the callback / block returns false for all of the items in the array, or if the array is empty; otherwise return false.
*/

// Solution:
const none = (arr, fun) => arr.every(item => !fun(item))

/*
Best rated solutions:

function none(arr, fun){
  return !arr.some(fun);
}

function none(arr, fun){
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i]) == true) {
      return false;
    }
  }
  
  return true;
}

function none(arr, fun) {
  return !arr.reduce( (none, item) => fun(item), false );
}

*/