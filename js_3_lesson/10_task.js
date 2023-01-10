/**Write a program that will constantly ask user to enter a number (via prompt) and when the user enters 
 * stop instead of a number, alert the sum of all numbers they entered. */

'use strict'

let numbers = prompt("enter a number, to sum enter a 'stop'");
let result = 0;

while (numbers !== 'stop') {
  const sum = parseInt(numbers);
  if (!isNaN(sum)) {
    result = result + sum;
  } else {
    alert("use numeric values");
  }
  numbers = prompt("enter a number, to sum enter a 'stop'");
}

alert("sum: " + result);



