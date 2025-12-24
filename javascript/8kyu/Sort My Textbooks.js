/*
Instructions:
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/

// Solution:
function sorter(textbooks) {
  return textbooks.sort(function(a, b) {
  let nameOne = a.toLowerCase();
  let nameTwo = b.toLowerCase();
  
  if(nameOne < nameTwo) {
    return -1;
  }
  
  if(nameOne > nameTwo) {
    return 1
  }
   return 0;
  });
}

/*
Best rated solutions:

function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                  a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}

function sorter(arr) {
  return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}

*/