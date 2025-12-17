/*
Instructions:
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

*/

// Solution:
function isPalindrome(x) {
  let newStr = x.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedStr = newStr.split('').reverse().join('');
  return newStr === reversedStr;
}

/*
Best rated solutions:

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

*/