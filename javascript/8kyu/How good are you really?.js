/*
Instructions:
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

// Solution:
function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce( (acc, c) => acc + c)
  let average = sum / classPoints.length
  return yourPoints > average
  //return classPoints.some( points => yourPoints > classPoints || yourPoints < classPoints)
}

console.log( betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) )
console.log( betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) )
console.log( betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) )

/*
Best rated solutions:

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}

*/