/*
Instructions:
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

// Solution:
function rentalCarCost(d) {
  // take cost of car * days you rent the car for
  let rentalCarCost = 40
  let totalCost = rentalCarCost * d
  
  // depending of the day its either 50 or 20 off
  //rent car for 7+ days -50 total cost or rent car for 3+ days -20 totla cost 
  return (d >= 7) ? totalCost - 50 : (d >= 3) ? totalCost - 20 : totalCost
}

console.log( rentalCarCost(1) ) // return 40
console.log( rentalCarCost(2) ) // return 80
console.log( rentalCarCost(3) ) // return 100
console.log( rentalCarCost(4) ) // return 140
console.log( rentalCarCost(5) ) // return 180
console.log( rentalCarCost(6) ) // return 200
console.log( rentalCarCost(7) ) // return 230
console.log( rentalCarCost(8) ) // return 270
console.log( rentalCarCost(9) ) // return 310
console.log( rentalCarCost(10) ) // return 350

/*
Best rated solutions:

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

function rentalCarCost(d) {
  let costPerDay = 40;
  let totalCost = costPerDay * d;

  if (d >= 7) {
    totalCost -= 50;
  } else if (d >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

function rentalCarCost(d) {
	var amount,
		dailyCharge = 40;
	if(d >= 7) {
		amount = (dailyCharge * d) - 50;
	} else if (d >= 3) {
		amount = (dailyCharge * d) - 20;
	} else {
		amount = dailyCharge * d;
	}
	return amount;
}

*/