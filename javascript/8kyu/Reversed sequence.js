/*
Instructions:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

// Solution:
const reverseSeq = n => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i)
  }
  return result
};

/*
Best rated solutions:

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

const reverseSeq = length => Array.from({length}, () => length--)

const reverseSeq = n => {
  let arr = [];

  while(n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};

*/