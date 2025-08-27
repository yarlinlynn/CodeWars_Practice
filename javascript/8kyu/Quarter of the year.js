/*
Instructions:
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/

// Solution:
// The Math.ceil() function rounds a number upwards to the nearest integer.
// Dividing the month by 3 groups months into sets of three,
// and Math.ceil() correctly assigns them to the respective quarter.
// For example:
// month = 1, 2, 3 -> 1/3, 2/3, 3/3 -> Math.ceil() results in 1
// month = 4, 5, 6 -> 4/3, 5/3, 6/3 -> Math.ceil() results in 2
// and so on.
const quarterOf = (month) => Math.ceil(month / 3)

/*
Best rated solutions:

const quarterOf = (month) => {
  // Your code here
  return Math.ceil(month / 3);
}

const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}

const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  
}

*/