/**Write a program that will constantly ask user to enter a number (via prompt) and when the user enters 
 * stop instead of a number, alert the sum of all numbers they entered. */

'use strict'

let input = prompt("enter a number, to sum enter a 'stop'");
let result = 0;

while (input !== 'stop') {
  const number = parseInt(input);
  if (!isNaN(number)) {
    result = result + number;
  } else {
    alert("use numeric values");
  }
  input = prompt("enter a number, to sum enter a 'stop'");
}

alert("sum: " + result);



