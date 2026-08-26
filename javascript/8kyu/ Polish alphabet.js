/*
Instructions:
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants. Your task is to change the letters with diacritics:

ą -> a, ć -> c, ę -> e, ł -> l, ń -> n, ó -> o, ś -> s, ź -> z, ż -> z

and print out the string without the use of the Polish letters.
For example: "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

// Solution:
function correctPolishLetters (string) {
  const polishAlphabet = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
  };
  
  return string.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, match => polishAlphabet[match]);
}

/*
Best rated solutions:

var polishLetters = { "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z", };

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}

function correctPolishLetters(s) {
  return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}

*/