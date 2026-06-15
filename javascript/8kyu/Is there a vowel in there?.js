/*
Instructions:
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
*/

// Solution:
function isVow(a){
  for (let i = 0; i < a.length; i++) {
    let character = String.fromCharCode(a[i])
    if('aeiou'.includes(character)) {
      a[i] = character;
    }
  }
  
  return a
}

/*
Best rated solutions:

const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

*/