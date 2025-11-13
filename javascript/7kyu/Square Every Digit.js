/*
Instructions:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
*/

// Solution:
function squareDigits(num){
  let numString = String(num);
  let splitArr = numString.split("").map( num => {
    let numArr = Number(num);
    let squared = numArr * numArr;
    return String(squared)
  });
  let concatStr = splitArr.join("");
  return Number(concatStr)
}

/*
Best rated solutions:

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

function squareDigits(num){
  let result = num
    .toString()
    .split("")
    .map( num => parseInt(num) )
    .map( num => num * num )
    .join("")
   
  return parseInt(result)
}

*/