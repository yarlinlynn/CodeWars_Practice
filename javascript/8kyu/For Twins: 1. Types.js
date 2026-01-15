/*
Instructions:
Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
42, "number"   --> true
"42", "number" --> false
*/

// Solution:
const typeValidation = (variable, type) => typeof variable === type;

/*
Best rated solutions:

function typeValidation(variable, type) {
  return typeof variable === type
}

function typeValidation(variable, type) {
  if (typeof variable === 'number' && type === 'number') {
    return true;
  } else if (typeof variable === 'undefined' && type === 'undefined') {
    return true;
  } else if (typeof variable === 'string' && type === 'string') {
    return true;
  } else if (typeof variable === 'boolean' && type === 'boolean') {
    return true;
  } else if (typeof variable === 'object' && type === 'object') {
    return true;
  }
  return false;
}

*/