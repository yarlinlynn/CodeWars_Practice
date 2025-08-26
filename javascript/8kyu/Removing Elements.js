/*
Instructions:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// Solution:
function removeEveryOther(arr){
  let newArray = arr.filter( (element, i) => {
    return i % 2 === 0
  })
  return newArray
}

/*
Best rated solutions:

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

function removeEveryOther(arr){
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}

const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

*/