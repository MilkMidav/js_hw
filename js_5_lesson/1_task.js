/**Given a number, return the sum of all numbers from 0 up to the number:
intervalSum(10) === 55;
intervalSum(59) === 1770; */
'use strict'

function intervalSum(number) {
  if (number === 1) {
    return number;
  } 

  return number += intervalSum(number - 1);
}

console.log(intervalSum(10));
console.log(intervalSum(59));

/**OTHER SOLUTION*/

function intervalSum2(number) {
  return (number === 1) ? number : number += intervalSum2(number - 1);
}

console.log(intervalSum2(10));
console.log(intervalSum2(59));