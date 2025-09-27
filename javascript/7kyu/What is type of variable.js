/*
Instructions:
Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'
*/

// Solution:
function type(value) {
  if (value === null) {
    return "null";
  }
  let string = Object.prototype.toString.call(value);
  return string.slice(8, -1).toLowerCase();
}

/*
Best rated solutions:

function type(value) {
  return {}.toString.call(value).slice(8, -1).toLowerCase();
}

const type = (value) => {
  if (Array.isArray(value)) return "array";
  if (value instanceof Date) return "date";
  if (value === null) return "null";
  
  return typeof value;
};

const type = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

*/