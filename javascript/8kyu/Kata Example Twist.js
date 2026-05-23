/*
Instructions:
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.
*/

// Solution:
let websites = Array(1000).fill().map( () => "codewars");

/*
Best rated solutions:

var websites = [];
while (websites.length < 1000) websites.push("codewars")

var websites = []
for (i=0; i<1000; i++)
{
  websites.push("codewars");
}

*/