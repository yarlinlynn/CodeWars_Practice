/*
Instructions:
Functional closures can get overly attached. Set them straight!
Why doesn't greetAbe() actually greet Abe?

let name = 'Abe'
const greetAbe = () => 'Hello, ' + name + '!'

name = 'Ben'
const greetBen = () => 'Hello, ' + name + '!'
*/

// Solution:
let name = 'Abe'
const greetAbe = () => 'Hello, ' + name + '!'

let newName = 'Ben'
const greetBen = () => 'Hello, ' + newName + '!'

/*
Best rated solutions:

var greet_abe = greet('Abe');
var greet_ben = greet('Ben');
function greet(name) {
  return function() {
    return "Hello, " + name + '!';
  };
}

function create_greeter(name) {
  return function() {
    return "Hello, " + name + "!";
  }
}
var name = 'Abe';
var greet_abe = create_greeter(name);
name = 'Ben';
var greet_ben = create_greeter(name);

*/