/*
Instructions:
Given an array of integers, calculate the Average of these numbers. Main challenge is to write shortest and compact function for it.

For example: var a = [0, 1, 2];
avg(a) // output should be 1
Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.
*/

// Solution:
const avg = (a) => a.reduce( (a,b) => a + b) / a.length;

/*
Best rated solutions:

function avg(a){
 let sum = 0;
 for(let i in a){
     sum+=a[i];
 }
 return sum/a.length;
}

*/