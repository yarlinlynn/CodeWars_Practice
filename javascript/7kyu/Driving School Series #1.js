/*
Instructions:
Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


Example:

[10,10,10,18,20,20] --> 12
*/

// Solution:
function passed (list) { 

  let studentsPassed = list.filter( num => num <= 18);
  
  if(studentsPassed.length === 0) {
    return 'No pass scores registered.'
  }
  
  return Math.round(studentsPassed.reduce( (acc, current) => acc + current) /studentsPassed.length)

} 

/*
Best rated solutions:

function passed (list) { 

  let result = list.filter(number => number <= 18);
  return result.length ? Math.round(result.reduce((s, v) => s + v, 0)/result.length) : 'No pass scores registered.';
}

*/


