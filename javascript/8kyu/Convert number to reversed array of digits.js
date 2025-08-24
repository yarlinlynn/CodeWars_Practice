/*
Instructions:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

// Solution:
function digitize(n) {
    // 1. Convert the number to a string
    // 2. Split the string into an array of characters
    // 3. Reverse the order of elements in the array
    // 4. Convert each character back to a number
    return String(n).split('').reverse().map(Number);
}

console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]
console.log(digitize(0));     // Output: [0]

/*
Explanation:
String(n): Converts the input number n into its string representation. For example, 35231 becomes "35231".
.split(''): Splits the string into an array of individual characters. "35231" becomes ["3", "5", "2", "3", "1"].
.reverse(): Reverses the order of elements in the array in place. ["3", "5", "2", "3", "1"] becomes ["1", "3", "2", "5", "3"].
.map(Number): Iterates over each element in the array and applies the Number constructor to it, converting the string digit back into a numerical digit. ["1", "3", "2", "5", "3"] becomes [1, 3, 2, 5, 3]
*/

/*
Best rated solutions:

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

*/