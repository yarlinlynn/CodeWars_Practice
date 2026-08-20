/*
Instructions:
Write a function that calculates the original product price, without VAT.
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
Thus, if your function receives 230.00 as input, it should return 200.00

Notes:
- VAT is always 15% for the purposes of this Kata.
- Round the result to 2 decimal places.
- If null value given then return -1
*/

// Solution:
const excludingVatPrice = price => price === null ? -1 : price / (1 + 15 / 100).toFixed(2);

/*
Best rated solutions:

function excludingVatPrice(price) {
  return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
}

const excludingVatPrice = price => price !== null ? (price / 1.15).toFixed(2) * 100 / 100 : -1;

*/