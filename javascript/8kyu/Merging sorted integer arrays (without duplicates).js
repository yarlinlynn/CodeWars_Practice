/*
Instructions:
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

// Solution:
const mergeArrays = (a, b) => [...new Set([...a, ...b])].sort( (a,b) => a - b);

/*
Best rated solutions:

function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}

function mergeArrays(a, b) {
  let mergedArray = [...new Set([...a, ...b])]
  let sortedResult = mergedArray.sort( (a,b) => a - b);
  return sortedResult;
}

function mergeArrays(a, b) {
 return [...a,...b].sort((a,b)=> a - b).filter ((elem,i,x)=> i == x.indexOf(elem))
}

*/