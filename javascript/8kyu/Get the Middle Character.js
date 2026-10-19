/*
Instructions:
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.

Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

// Solution:
function getMiddle(s) {
  const middleChar = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(middleChar -1, middleChar + 1) : s.charAt(middleChar);
}

/*
Best rated solutions:

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

*/