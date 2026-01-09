/*
Instructions:
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

// Solution:
let Ghost = function() {
  const colors = ['white', 'yellow', 'purple', 'red']
  const randomColor = Math.floor(Math.random() * colors.length)
  this.color = colors[randomColor];
};

/*
Best rated solutions:

var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};

class Ghost {
  constructor() {
    this.color = [`red`, `yellow`, `purple`, `white`][Math.random() * 4 ^ 0];
  }
}

*/