/*
Instructions:
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/

// Solution:
function getRealFloor(n) {
  
  if(n < 0) {
    return n
  } else if(n <= 1) {
    return 0
  } else if( n === 2) {
    return 1
  } else if(n === 3) {
    return 2
  } else if(n === 4) {
    return 3
  } else if(n === 5) {
    return 4
  } else if(n === 6) {
    return 5
  } else if(n === 7) {
    return 6
  } else if(n === 8) {
    return 7
  } else if(n === 9) {
    return 8
  } else if(n === 10) {
    return 9
  } else if(n === 11) {
    return 10
  } else if(n === 12) {
    return 11
  } else if(n === 13) {
    return 12
  } else if(n > 13) {
    return n - 2
  }

}

/*
Best rated solutions:

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}
  
const solution = (a, b) => {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

*/