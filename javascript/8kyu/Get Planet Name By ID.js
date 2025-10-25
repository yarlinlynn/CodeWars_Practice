/*
Instructions:
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"

*/

// Solution:
function getPlanetName(id) {
  let name;
  if(id === 1) {
    name = 'Mercury'
  } else if (id === 2) {
    name = 'Venus'
  } else if (id === 3) {
    name = 'Earth'
  } else if (id === 4) {
    name = 'Mars'
  } else if (id === 5) {
    name = 'Jupiter'
  } else if (id === 6) {
    name = 'Saturn'
  } else if (id === 7) {
    name = 'Uranus'
  } else if (id === 8) {
    name = 'Neptune'
  } 
  return name
}

/*
Best rated solutions:

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}

*/