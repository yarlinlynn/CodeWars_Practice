/*
Instructions:
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

// Solution:

const parseF = s => Number.isNaN(parseFloat(s)) ? null : parseFloat(s)

/*
Best rated solutions:

const parseF = s => {
  let num = parseFloat(s);
  return Number.isNaN(num) ? null : num
}
*/

