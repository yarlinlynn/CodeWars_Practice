/*
Instructions:
Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

For example:

var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85
Good luck!
*/

// Solution:
Array.prototype.sum = function() {
  if(this.length === 0) return 0
  
  return this.reduce( (acc, x) => acc + x)
}

/*
Best rated solutions:

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.sum=function(){
  return this.reduce((a,b)=>a+(typeof b=='number' ? b:0),0);
}

*/