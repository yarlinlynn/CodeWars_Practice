/*
Instructions:
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

// Solution:
const lowercaseCount = (str) => (str.match(/[a-z]/g) || []).length;

/*
Best rated solutions:

function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}

function lowercaseCount(str){
    var check = str.match(/[a-z]/g);
    return check ? check.length : 0
    
}

*/