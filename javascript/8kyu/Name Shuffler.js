/*
Instructions:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

// Solution:
const nameShuffler = (str) => str.split(" ").reverse().join(" ")

/*
Best rated solutions:

function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}

function nameSuffle(str){
  var arr = str.split(" ");
  return arr[1] + ' ' + arr[0]
}

*/