/*
Instructions:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.
*/

// Solution:
 function invert(array) {
   return array.map( num => -num);
}

/*
Best rated solutions:

const invert = array => array.map(num => -num);

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

*/