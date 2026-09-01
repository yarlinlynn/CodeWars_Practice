/*
Instructions:
Basic regex tasks. Write a function that takes in a numeric code of any length (passed as an integer). The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/

// Solution:
const validateCode = (code) => /^[1-3]/.test(code.toString());

/*
Best rated solutions:

function validateCode (code) {return /^[123]/.test(code)}

function validateCode (code) {
  return /^[1-3]/.test(code);
}

function validateCode (code) {
  var codeSplit = code.toString().split("");

  if(codeSplit[0] == "1" || codeSplit[0] == "2" || codeSplit[0] == "3"){
    return true;
  }else{
    return false;
  }
}

*/