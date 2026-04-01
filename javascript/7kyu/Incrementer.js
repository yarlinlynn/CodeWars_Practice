/*
Instructions:
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
*/

// Solution:
function incrementer(nums) { 
  return nums.map((value, index) => {
    return (value + (index + 1)) % 10;
  })
}

/*
Best rated solutions:

function incrementer(num) { 
  return num.map((a,i) => (a+i+1)%10);
}

function incrementer(num) { 
  var arr=[];
  for (var i=0; i<num.length; ++i)
    arr.push((num[i]+i+1)%10)
  return arr;
}

const incrementer = nums => nums.map((n, i) => (n + i + 1) % 10)

*/