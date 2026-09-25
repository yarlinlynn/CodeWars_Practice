/*
Instructions:
What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:
[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.
*/

// Solution:
Array.prototype.filter = function (func) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    if(func(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
}

/*
Best rated solutions:

Array.prototype.filter = function( ruleCondition ) {
  var arr = []; // Create an empty array to store the values that satisfy the ruleCondition
  
  this.forEach( function( currentValue ) {
    if( ruleCondition( currentValue ) ) arr.push( currentValue ); // Evaluate each element and push the value when content in array meet condition
  });
  return arr;
}

Array.prototype.filter = function (fn) {
  return this.reduce((pre, val) => fn(val) ? [...pre, val] : pre, []);
};

*/