/*
Instructions:
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/

// Solution:
sortme = function( names ){
  return names.toSorted();
}

/*
Best rated solutions:

sortme = function( names ){
  return names.sort();
}

const sortme = names => names.sort();

sortme = function( names ){
  return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
}

*/