/*
Instructions:
Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows: ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']

If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
*/

// Solution:
function part(x) {
  const words = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad'];
  const wordCount = x.filter(word => words.includes(word)).length;
  
  return words.some(str => x.includes(str)) ? `Mine\'s a Pint${'!'.repeat(wordCount)}` : 'Lynn, I\'ve pierced my foot on a spike!!';
}

/*
Best rated solutions:

function part(x){
  var count = x.filter(e => ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad'].indexOf(e) != -1).length;
  return count > 0 ? 'Mine\'s a Pint' + '!'.repeat(count) : 'Lynn, I\'ve pierced my foot on a spike!!';
}

*/