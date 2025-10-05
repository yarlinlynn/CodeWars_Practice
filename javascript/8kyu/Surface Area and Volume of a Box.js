/*
Instructions:
Write a function that returns the total surface area and volume of a box.

The given input will be three positive non-zero integers: width, height, and depth.
*/

// Solution:
function getSize(width, height, depth) {
  let surfaceArea = 2 * ( (width * height) + (width * depth) + (height * depth) );
  let volume = width * height * depth;
  return [
    surfaceArea,
    volume
  ];
}

console.log( getSize(4, 2, 6) ) // [88, 48]
console.log( getSize(10, 10, 10) ) // [600, 1000]

/*
Best rated solutions:

const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];

function getSize(width, height, depth){
  var box = { width: width, height:height, depth:depth};
  
  return [getArea(box), getVolume(box)];
}
function getArea(box){
  return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
}
function getVolume(box){
  return box.width * box.height * box.depth;
}

const getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth];

*/