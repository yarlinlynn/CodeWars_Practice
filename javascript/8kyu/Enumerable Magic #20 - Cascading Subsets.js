/*
Instructions:
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2) => [[1,2], [2,3], [3,4]]
each_cons([1,2,3,4], 3) => [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

// Solution:
function eachCons(array, n) {
  let arr = [];
  for (let i = 0; i <= array.length - n; i++) {
    arr.push(array.slice(i, i + n))
  }
	return arr;
}

/*
Best rated solutions:

function eachCons(array, n) {
  let res = [];
  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }
	return res.filter(e => e.length === n);
}

function eachCons(array, n) {
	return array.map((x,y) => array.slice(y, y + n)).filter(x => x.length == n)
}

const eachCons = (l,n) => [...Array(Math.max(0,l.length-n+1)).keys()].map(i=>l.slice(i,i+n));

*/