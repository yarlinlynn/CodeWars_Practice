/*
Instructions:
Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

With "James" as the first name and "Stevens" as the last name should return "James Stevens"
*/

// Solution:
const combineNames = (first, last) => first.concat(" ", last)

/*
Best rated solutions:

function combineNames (first, last) {
   let fullName = first.concat(" ", last)
   return fullName
}

const combineNames = (...names) => names.join(' ');

const combineNames = (a, b) => `${a} ${b}`;

*/