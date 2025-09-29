/*
Instructions:
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

// Solution:
function hello(name) {
   if (name) {
    let sentence = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${sentence}!`
  } else {
    return `Hello, World!`
  } 
}

/*
Best rated solutions:

const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

function hello(name) {
  return (name === '' || name === undefined) ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`;
}

*/