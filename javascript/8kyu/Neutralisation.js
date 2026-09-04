/*
Instructions:
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive. When negatives and negatives interact, they remain negative. But when negatives and positives interact, they become neutral, and are shown as the number 0.

Worked Example ("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples 
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
Notes: The two strings will be the same length.
*/

// Solution:
function neutralise(s1, s2) {
  let signs = [];
  for (let i = 0; i < s1.length; i++) {
    signs += s1[i] === s2[i] ? s1[i] : "0";
  }
  return signs;
}

/*
Best rated solutions:

function neutralise(s1, s2) {
  let newS = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == "+" && s2[i]== "+") {
      newS += "+";
    } else if (s1[i]== "-" && s2[i]== "-") {
      newS += "-";
    } else {
      newS += "0";
    }
  }
  return newS;
}

const neutralise = (a, b) => a.split('').map((el,i) => el === b[i] ? el : 0).join('')

*/