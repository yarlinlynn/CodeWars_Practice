/*
Instructions:
Can you implement a function that will return number of words in a string?

You have to ensure that spaces in string is a whitespace for real.

Let's take a look on some examples:

countWords("Hello"); // returns 1 as int
countWords("Hello, World!") // returns 2
countWords("No results for search term `s`") // returns 6
countWords(" Hello") // returns 1
*/

// Solution:
const countWords = (str) => str.trim().split(/\s+/).filter(word => word.length > 0).length;

/*
Best rated solutions:

function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}

function countWords(str) {
 return str.split(/\s/).filter(el => {
    return el;
  }).length; 
}

*/