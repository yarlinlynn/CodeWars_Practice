/*
Instructions:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into:
[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Good Luck!
*/

// Solution:
const convertHashToArray = (hash) => Object.entries(hash);

/*
Best rated solutions:

const convertHashToArray = o => Object.entries(o).sort();

function convertHashToArray(hash){
  let result = [];
  Object.keys(hash).sort().map(item => result.push([item,hash[item]]));
  return result;
}

const convertHashToArray = (hash) => Object.keys(hash).map(key => [key, hash[key]]).sort();

*/