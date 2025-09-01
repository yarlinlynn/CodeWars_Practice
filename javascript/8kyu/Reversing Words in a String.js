/*
Instructions:
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
*/

// Solution:
const reverse = string => string.split(" ").reverse().join(" ")

/*
Best rated solutions:

function reverse(string){
    //   split string
  let splitString = string.split(" ")
    //   return reverse string
  splitString.reverse()
  let reversedString = splitString.join(" ")
  return reversedString
}

function reverse(string){
  return string.split(' ').reverse().join(' ');
}

*/