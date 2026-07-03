/*
Instructions:
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples:
- ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
- ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
- ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes:
- "flick" will always be given in lowercase.
- A list may contain multiple flicks.
- Switch the boolean value on the same element as the flick itself.
*/

// Solution:
function flickSwitch(arr){
  let arrItem = true;
  return arr.map(item => item === "flick" ? arrItem = !arrItem : arrItem);
}

/*
Best rated solutions:

function flickSwitch(arr){
  let flag = true
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'flick'){
      flag == false ? flag = true : flag = false
    } 
    arr[i] = flag
  }
  return arr
}

const flickSwitch = (arr) => (flick = true, arr.map(v => v === 'flick' ? flick = !flick : flick));

*/