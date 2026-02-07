/*
Instructions:
The code provided is supposed replace all the dots . in the specified String str with dashes -
But it's not working properly.

var replaceDots = function(str) {
  return str.replace(".", "-");
}

Task
Fix the bug so we can all go home early.
Notes
String str will never be null.

*/

// Solution:
const replaceDots = (str) => str.replaceAll(".", "-")
/*
Best rated solutions:

var replaceDots = function(str) {
  return str.replace(/\./g,'-');
}

*/