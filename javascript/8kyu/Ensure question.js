/*
Instructions:
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/

// Solution:
const ensureQuestion = (str) => str.endsWith("?") ? str : `${str}?`

/*
Best rated solutions:

function ensureQuestion(s) {
  return s.includes('?') ? s : `${s}?`;
}

function ensureQuestion(s) {
    return s[s.length-1] === '?' ? s : `${s}?`
}

*/