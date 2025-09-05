/*
Instructions:
You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
*/

// Solution:
items = []
items.push ({a: "b", c: "d"})

/*
in Ruby (and also in JavaScript/Java) the problem is that when you call push with a block-like syntax (items.push { ... }), the interpreter thinks you're passing a block, not a hash/object.

Here’s the simplest fix in each language:

Ruby:
items = []
items.push({a: "b", c: "d"})
p items

JavaScript:
let items = [];
items.push({a: "b", c: "d"});
console.log(items);

*/