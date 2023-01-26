"use strict"

function sumTwoSmallestNumbers(array) {  
  let smallest = array[0];
  let secondSmallest = array[1];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > smallest && array[i] < secondSmallest) {
      secondSmallest = array[i];
    }
  }

  return secondSmallest + smallest;
}

const arr = [23, 71, 33, 82, 1];

console.log(sumTwoSmallestNumbers(arr))
