/*
Instructions:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// Solution:
function abbrevName(name){

  // remove whitespace and split
  let parts = name.trim().split(" ")
  
  // get first character of first and last name
  let firstNameInitial = parts[0].charAt(0).toUpperCase()
  let lastNameInitial = parts[parts.length - 1].charAt(0).toUpperCase()
  
  //return string with . capitalized
  return `${firstNameInitial}.${lastNameInitial}`

}

/*
Best rated solutions:

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

*/