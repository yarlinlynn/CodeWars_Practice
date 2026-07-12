/*
Instructions:
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.
Input coordinates fit in range −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6
*/

// Solution:
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/*
Best rated solutions:

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

const distanceBetweenPoints = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

*/