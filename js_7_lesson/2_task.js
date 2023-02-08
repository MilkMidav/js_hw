/**Given an array of numbers, get rid of all odd numbers: */
'use strict'

function removeOdds(array) {
  const odd = array.filter(function (element) {
    return element % 2 === 0;
  })

  return odd;
}

console.log(removeOdds([1, 2, 3, 4, 5, 6, 7, 8]));