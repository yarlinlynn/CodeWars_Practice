/*
Instructions:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// Solution:
const grow = x => x.reduce( (acc, c) => acc * c,1)

console.log( grow([1, 2, 3]) ) // 6
console.log( grow([4, 1, 1, 1, 4]) ) // 16
console.log( grow([2, 2, 2, 2, 2, 2]) ) // 64

/*
Best rated solutions:

const grow = x => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

function grow(x){
  return x.reduce((a, b)=> a * b,1);
}

*/