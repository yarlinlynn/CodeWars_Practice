/*
Instructions:
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/

// Solution:
function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :) 
  let findMatch = inputString.match(/(\d+\.?\d*)/) // Matches integers or floating-point numbers
  if (findMatch) {
    let numString = findMatch[1]  // if we find a match then captured the number string
    return Number(numString) //convert match into a number  or use shorthand mehtod: return +numString
  }
}

console.log( getAge("4 years old") ) // 4
console.log( getAge("9 years old") ) // 9
console.log( getAge("1 years old") ) // 1

/*
Best rated solutions:

function getAge(inputString){
  return parseInt(inputString);
}

function getAge(inputString){
  return parseInt(inputString[0]); 
}

function getAge(inputString){
  return +inputString[0];
}

function getAge(inputString){
    return parseInt(inputString.charAt(0));
}

*/