/*
Instructions:
Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
But! Every third mango is free!

Examples
# 🥭 : Paid mango
# 🆓 : Free mango

Quantity = 2
Price = 3
Total cost ==> 6    
# Paid 2 mangoes for $3 per unit = $6; no mango for free ( 🥭🥭 )

Quantity = 3
Price = 3
Total cost ==> 6    
# Paid 2 mangoes for $3 per unit = $6; +1 mango for free ( 🥭🥭🆓 )

Quantity = 5
Price = 3
Total cost ==> 12   
# Paid 4 mangoes for $3 per unit = $12; +1 mango for free ( 🥭🥭🆓   🥭🥭 )

Quantity = 9
Price = 5
Total cost ==> 30   
# Paid 6 mangoes for $5 per unit = $30; +3 mangoes for free ( 🥭🥭🆓   🥭🥭🆓   🥭🥭🆓 )
*/

// Solution:
function mango(quantity, price){
let cost = 0;
  for (i = 0; i <= quantity; i++) {
    
    if(i % 3 !== 0) {
      cost += price
    }
  }
  return cost
}

/*
Best rated solutions:

function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}

function mango(quantity, price){
  return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
}

*/