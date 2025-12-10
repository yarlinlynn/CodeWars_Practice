/*
Instructions:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

// Solution:
 function swapValues() {
    var arg = Array.prototype.slice.call(arguments)[0];
    var temp = arg[0];
    arg[0] = arg[1];
    arg[1] = temp;
    return arg;
}

/*
Best rated solutions:

function swapValues() {
  return arguments[0].reverse();
}

function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

*/