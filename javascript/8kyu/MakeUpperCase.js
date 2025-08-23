/*
Instructions:
Write a function which converts the input string to uppercase.
*/

// Solution:
function makeUpperCase(str) {
  return str.toUpperCase();
}

/*
Best rated solutions:

const makeUpperCase = str => str.toUpperCase();

function makeUpperCase(str) {
  return str.replace(/[a-z]/g,s=>String.fromCharCode(s.charCodeAt(0)-32))
}

*/