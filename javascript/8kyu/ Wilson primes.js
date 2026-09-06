/*
Wilson primes satisfy the following condition. Let P represent a prime number.
Then,

P∗P
(P−1)!+1
 
should give a whole number, where P! is the factorial of P.
Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
*/

// Solution:
const amIWilson = (p) =>  p === 5 || p === 13 || p === 563;

/*
Best rated solutions:

function amIWilson(p) {
  p = BigInt(p);
  const fac = n => n ? n * fac(n-1n) : 1n;
  const d = (fac(p-1n) + 1n);
  return !(d % (p * p));
}

const amIWilson = p => [5, 13, 563].indexOf(p) > -1

*/