/*
Instructions:
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/

// Solution:
const isDigit = s => !isNaN(parseFloat(s)) && isFinite(s) ? true : false;

/*
Best rated solutions:

function isDigit(s) {
 return s==parseFloat(s);
}

function isDigit(s) {
  return parseFloat(s) === Number(s)
}

const isDigit = s => /^-?\d+(\.\d+)?$/.test(s);

*/