/*
Instructions:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

// Solution:
const remove = (string) => string.replace(/!+$/, '');

/*
Best rated solutions:

function remove(s){
  return s.replace(/!+$/, '');
}

function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}

*/