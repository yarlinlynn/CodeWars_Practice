/*
Instructions:
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
*/

// Solution:
Object.freeze(MrFreeze)

/*
Best rated solutions:

function deepFreeze (o) {
  var prop, propKey;
  
  Object.freeze( o );
  for ( propKey in o ) {
    prop = o[ propKey ];
    
    if ( !o.hasOwnProperty( propKey ) || !(typeof prop === "object") || Object.isFrozen( prop ) ) {
      continue;
    }

    deepFreeze(prop);
  }
}
deepFreeze(MrFreeze);

function freezeObj(obj) {
  Object.freeze(obj);
}

freezeObj(MrFreeze);

*/