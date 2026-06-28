/*
Instructions:
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:
- Terrible: tip 0%
- Poor: tip 5%
- Good: tip 10%
- Great: tip 15%
- Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript
Because you're a nice person, you always round up the tip, regardless of the service.
*/

// Solution:
function calculateTip(amount, rating) {
  let tip = rating.toLowerCase();
  
  
  if( tip == "terrible") {
    return Math.ceil(amount * 0/100);
  } else if(tip == "poor") {
    return Math.ceil(amount * 5/100);
  } else if(tip == "good") {
    return Math.ceil(amount * 10/100);
  } else if(tip == "great") {
    return Math.ceil(amount * 15/100);
  } else if(tip == "excellent") {
    return Math.ceil(amount * 20/100);
  } else {
    return "Rating not recognised";
  }
}

/*
Best rated solutions:

const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};
const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  
  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};

unction calculateTip(amount, rating) {
  switch(rating.toLowerCase()){
    case "terrible":return 0;
    case "poor":return Math.ceil(amount * 0.05);
    case "good":return Math.ceil(amount * 0.1);
    case "great":return Math.ceil(amount * 0.15);
    case "excellent":return Math.ceil(amount * 0.2);
    default:return "Rating not recognised";
  }
}

let calculateTip = (a,r) => {
  const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase());
  return i === -1 ? "Rating not recognised" : Math.ceil(i*a*.05);
}

*/