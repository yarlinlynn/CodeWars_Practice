
/*
Instructions:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

// Solution:
function solution(str){
  return str.split("").reverse().join("")  
  console.log(str)
}

/*
Best rated solutions:

const solution = str => str.split('').reverse().join('');

const solution = s => [...s].reverse().join('')
  
*/