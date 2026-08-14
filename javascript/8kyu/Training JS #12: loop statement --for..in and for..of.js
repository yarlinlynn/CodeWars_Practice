/*
Instructions:
The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array. You should use for..in in your code, otherwise your solution may not pass this kata
*/

// Solution:
function giveMeFive(obj){
  let values = [];
  for (let key in obj) {
    if(key.length === 5) {
      values.push(key);
    }
    if(obj[key].length === 5) {
      values.push(obj[key])
    }
  }
  return values;
}

/*
Best rated solutions:

function giveMeFive(obj){
  var five=[];
  for (var key in obj) {
    if (key.length==5) five.push(key);
    if (obj[key].length==5) five.push(obj[key]);
  }
  return five;
}

*/