

/*
Instructions:
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

Examples
'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'
*/

// Solution:
function removeChar(str){
  //  For strings with exactly 2 characters, return an empty string. 
 if(str.length < 2) {
   return ""
 }
//   remove first and last character
  return str.slice(1, str.length -1)
  
};

/*
Best rated solutions:

const removeChar = str => str.slice(1,-1)

function removeChar(str) {
  return str.slice(1, -1);
}
  
*/