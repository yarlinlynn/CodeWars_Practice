/*
Instructions:
Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/

// Solution:
function makeMeSlow() {
  const startTime = Date.now();

  while (Date.now() - startTime < 7000) {}
} 

/*
Best rated solutions:

const makeMeSlow = () => (start => {while (Date.now() - start < 7000);})(Date.now());

function makeMeSlow() {
  // this function is too fast!
  for (var x = 0; x < 5500000000; x++) {
  }
}

*/