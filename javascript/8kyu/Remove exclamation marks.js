/*
Instructions:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// Solution:
//const removeExclamationMarks = s => s.replace("!", "") ; removes only one !
const removeExclamationMarks = s => s.replace(/!/g, "") //removes all !

console.log( removeExclamationMarks("Hello World!") ) // "Hello World"

/*
Best rated solutions:

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

const removeExclamationMarks = (s) => {
  return s.split('').filter((letter) => letter !== '!').join('')
}

*/