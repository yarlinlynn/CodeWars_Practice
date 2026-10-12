/*
Instructions:
However, I myself find the for loop very complex and unreadable. Think about it - would you know what the for loop does if you've never learned computer programming? For example, if you've never coded before, would you have any idea what this thing in the for loop: i = 0; i < number; i++ means?

Therefore, I would like you to define a method callable on integers, Number.prototype.times, that effectively replaces the for loop. It should work like this:

// Prints "Hello World" to the console 100 times
// Isn't this much more readable?  At least a non-programmer
// knows that something is being executed 100 times!
(100).times(_ => {
  console.log("Hello World");
});

In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times). The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.
*/

// Solution:
Number.prototype.times = function (f) {
  for (let i = 0; i < this; i++) {
    f(i);
  }
}

/*
Best rated solutions:

Number.prototype.times = function(fn) {
  let n = 0;
  while (n < this) fn(n++);
};

Number.prototype.times = function (f) {
  let n = this.valueOf();
  if (n < 0) throw new RangeError('Cannot call method "times" on negative number.');
  if (Math.round(n) !== n) throw new RangeError('Cannot call method "times" on non-integer number.');
  for (let i = 0; i < n; i++) { f(i); }
}

Number.prototype.times = function (f) {
  Array.from({length: this}, (x, i) => f(i))
}

*/