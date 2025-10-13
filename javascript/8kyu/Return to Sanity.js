/*
Instructions:
This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}
*/

// Solution:
function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}

/*
Best rated solutions:

function mystery() {
  var result = {'sanity': 'Hello'};
  return result;
}

const mystery = () => ({sanity: 'Hello'});

*/