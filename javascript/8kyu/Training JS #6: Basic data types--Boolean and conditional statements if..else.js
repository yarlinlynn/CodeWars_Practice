
// Instructions:
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// These values are converted to false in the conditional statement:

// 0, -0, "", null, undefined, NaN

// Solution:
function trueOrFalse(val){
  if (!val)    return 'false';             
  else     return 'true';
}

/*
Best rated solutions:

function trueOrFalse(val){
  return Boolean(val).toString();
}

function trueOrFalse(val){
  return val ? true : false;             
}

function trueOrFalse(val){
  if (val) return true;             
  return false;
}


*/