/*
Instructions:
Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    Use array.map() to return a new array with each value twice
    as large as the corresponding value in the passed in array.
}

var someNumbers = [1,2,10,57];
double(someNumbers);
*/

// Solution:
const double = (array) => array.map( value => value * 2)

/*
Best rated solutions:

function double(array) {
    return array.map( value => value * 2)
}

*/