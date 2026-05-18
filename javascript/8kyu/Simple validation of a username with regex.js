/*
Instructions:
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

// Solution:
function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/
  return res.test(username)
}

/*
Best rated solutions:

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}

const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);

*/