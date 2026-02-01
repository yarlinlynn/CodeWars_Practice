/*
Instructions:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
*/

// Solution:
const replace = (s) => s.replaceAll(/[aeiou]/gi, '!');

/*
Best rated solutions:

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');

*/