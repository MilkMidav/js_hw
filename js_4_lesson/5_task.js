/**Write a function that accepts an array and a digit. 
 * Return boolean whether the array contains 2 digits 
 * that add up to the given one. */
'use strict'

function checkSum(array, sum) { 
  for (let i = 0; i < array.length; i++) {
    const unknown = sum - array[i];
  
    if (array.includes(unknown)) {
      return true;
    }
  }
  return false;
}


function checkSumSecond(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

const arr = [4, 8, 3, 11, 5, 6];

const result = checkSumSecond(arr, 25)

console.log(result);