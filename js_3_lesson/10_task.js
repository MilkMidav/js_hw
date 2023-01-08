/**Write a program that will constantly ask user to enter a number (via prompt) and when the user enters 
 * stop instead of a number, alert the sum of all numbers they entered. */

'use strict'

let inputs = [];

for(var i = 0; ; i++) {
  const numbers = prompt("enter a number, to sum enter a 'stop' ");  
  if (numbers !== 'stop') {
    inputs.push(parseInt(numbers));
  } else {
    break
  }
}

let sum = 0;

for (j = 0; j < inputs.length; j++){
  sum = sum + inputs[j];
}

if (isNaN(sum)) {
  console.log('use numeric values!')
} else {
  console.log(sum);
}




