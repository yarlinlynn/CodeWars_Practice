/*
Instructions:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Solution:
function countSheeps(sheep) {
  return sheep.reduce( (count, sheep) => {
    return sheep === true ? count + 1 : count
  }, 0)
}

/*
Best rated solutions:

USING FILTER METHOD:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

USING FOR LOOP:
function countSheeps(arrayOfSheep) {
  var num = 0;
  
  for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;
      
  return num;
}

USING FOREACH METHOD
function countSheeps(arrayOfSheep) {
  var count = 0;
  
  arrayOfSheep.forEach( function (sheep) {
    if (sheep)
      count++;
  });
  
  return count;
}

USING FILTER METHOD WITH ARROW FUNCTION
let countSheeps = x => x.filter( s => s ).length;

*/