/*
Instructions:
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/

// Solution:
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

/*
Best rated solutions:

class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    
    bark() {
        return "Woof";
    }
}

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

function Dog (breed) {
  this.breed = breed;
}

Dog.prototype.bark = () => "Woof";

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

*/