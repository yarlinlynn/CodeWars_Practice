/*
Instructions:
Debug celsius converter
Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

Find the errors in the code to get the celsius converter working properly.

To convert fahrenheit to celsius:
celsius = (fahrenheit - 32) * (5/9)

function weatherInfo (temp) {
  var c : convert(temp)
  if (c > 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (tempertur) - 32 + (5/9)
  return temperature
}

*/

// Solution:
function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c <= 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}

console.log( weatherInfo(50) ) // 10 is above freezing temperature
console.log( weatherInfo(23) ) // -5 is freezing temperature

/*
Best rated solutions:

const weatherInfo = t => `${t = (t - 32) * (5 / 9)} is ${t > 0 ? 'above ': ''}freezing temperature`;

const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));
const convertToCelsius = temperature => (temperature - 32) * (5 / 9);
const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")

function weatherInfo(t) {
  var c = convertToCelsius(t)
  return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}
function convertToCelsius(t) {
  return (t - 32) * (5 / 9)
}

*/