/*
Instructions:
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

// Solution:
function greet(name) {
  let greeting = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   return `Hello ${greeting}!`;
}

/*
Best rated solutions:

var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};

const greet = (name) => `Hello ${name[0].toUpperCase()+name.slice(1,).toLowerCase()}!`;

*/