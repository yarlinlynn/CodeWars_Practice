/*
Instructions:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0

*/

// Solution:
const noBoringZeros = n => Number( String(n).replace(/0+$/, ''))

/*
Best rated solutions:

function noBoringZeros(n) {
  while(n % 10 == 0 && n != 0) {n /= 10}
  return n;
}

function noBoringZeros(n) {
  let string = String(n).replace(/0+$/, '');
  return Number(string)
}

*/