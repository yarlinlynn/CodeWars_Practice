/*
When provided with a letter, return its position in the alphabet.

Input :: "a"
Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

// Solution:
function position(letter){
  let position = letter.toLowerCase().charCodeAt(0);
  return `Position of alphabet: ${position - 96}`
}

/*
Best rated solutions:

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

function position(alphabet){
  var letters = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var placed = letters.indexOf(alphabet)
  return "Position of alphabet:" + " " + placed;
  
}

*/