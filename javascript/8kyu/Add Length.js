/*
Instructions:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*/

// Solution:
const addLength = str => str.split(/\s+/).filter(word => word.length > 0).map ((word) => `${word} ${word.length}`)

/*
Best rated solutions:

function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

function addLength(str){
  return str.split(" ").map( word => `${word} ${word.length}`)
}

function addLength(str) {
 let wordSplit = str.split(/\s+/).filter(word => word.length > 0);
   let lengthOfWords = wordSplit.map ((word) => `${word} ${word.length}`)
   return lengthOfWords;
}

*/