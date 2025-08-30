/*
Instructions:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

// Solution:
const doubleChar = str => str.replace(/./g, char => char + char) // Match any character and replace with itself doubled

/*
Best rated solutions:

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
  return [...str].map(v=>v+v).join('');
}

function doubleChar(str) {
  return Array.from(str) // Convert string to an array of characters
    .map(char => char.repeat(2)) // Repeat each character twice
    .join(''); // Join the repeated characters back into a string
}

*/