/*
Instructions:
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

// Solution:
function otherAngle(a, b) {
  let sumOfAngles = a + b;
  return thirdAngles = 180 - sumOfAngles
}

console.log( otherAngle(30, 60) ) // 90
console.log( otherAngle(60, 60) ) // 60
console.log( otherAngle(43, 78) ) // 59
console.log( otherAngle(10, 20) ) // 150

/*
Best rated solutions:

function otherAngle(a, b) {
  return 180 - (a + b);
}

const otherAngle = (a, b) => 180 - a - b

function otherAngle(a, b) {
  return 180 - a - b;
}

*/