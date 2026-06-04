/*
Instructions:
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a single digit (0-9), false otherwise.
*/

// Solution:
String.prototype.digit = function() {
  return /^\d$/.test(this);
};

/*
Best rated solutions:

String.prototype.digit = function() {
  return /^[0-9]$/.test(this);
};

*/