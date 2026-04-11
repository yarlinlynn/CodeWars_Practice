/*
Instructions:
I don't like writing classes like this:

class Animal {
    constructor(name, species, age, health, weight, color) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health = health;
        this.weight = weight;
        this.color = color;
    }
}
Give me the power to create a similar class like this:

const Animal = makeClass("name", "species", "age", "health", "weight", "color");
*/

// Solution:
function makeClass(...properties) {
    return class {
      constructor(...args) {
        properties.forEach((prop, i) => {
          this[prop] = args[i]
        })
      }
    };
}

/*
Best rated solutions:

function makeClass(...properties) {
  return function() {
    for (let i = 0; i < arguments.length; i++)
      this[properties[i]] = arguments[i];
  }
}

function makeClass(...arr) {
  return class {
    constructor(...a) {
      for (let i = 0; i < arr.length; i++) {
        this[arr[i]] = a[i];
      }
    }
  };
}

*/