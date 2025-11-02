/*
Instructions:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// Solution:
const getCount = (str) =>  {
  let vowelCount = str.match(/[aeiou]/gi)
   return vowelCount ? vowelCount.length : 0
}

/*
Best rated solutions:

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

*/