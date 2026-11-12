/*
Instructions:
Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

// Solution:
function isToday(date) {
  return new Date().toDateString() === date.toDateString()
}

/*
Best rated solutions:

function isToday(date) {
  var d = new Date();
  return (d.getDate() == date.getDate() && d.getFullYear() == date.getFullYear() && d.getMonth() == date.getMonth());
}

const isToday = receivedDate => new Date().toDateString() === receivedDate.toDateString();

function isToday(date) {
  return new Date().toString().substr(0, 15) === date.toString().substr(0, 15);
}

*/