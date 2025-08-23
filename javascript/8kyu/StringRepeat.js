
/*
Instructions:
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// Solution:
function repeatStr (n, s) {
  return s.repeat(n);
}


/*
Best rated solutions:

repeatStr = (n, s) => s.repeat(n)

function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}
  
*/