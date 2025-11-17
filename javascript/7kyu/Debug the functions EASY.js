/*
Instructions:
Debug the functions: Should be easy, begin by looking at the code. Debug the code and the functions should work. There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
   return arr * arr;
}
function add(arr) {
   return arr + arr;
}
function reverse(str) {
   return str.reverse();
}
*/

// Solution:
function multi(arr) {
  return arr.reduce( (a,b) => a * b)
}
function add(arr) {
  return arr.reduce( (a,b) => a + b)
}
function reverse(str) {
  return str.split("").reverse().join("")
}

/*
Best rated solutions:

const multi = a => a.reduce((s,v)=>s*v)
const add = a => a.reduce((s,v)=>s+v,0)
const reverse = s => [...s].reverse().join('')

*/