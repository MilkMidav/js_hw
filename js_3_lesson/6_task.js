/** Given two arrays of the same length:
const arr1 = [15, 45, 84, 32, 99];
const arr2 = [16, 81, 13, 24, 500];
Compare each number from arr1 with a corresponding (e.g. the one with the same index)
number from arr2 and then create an array of bigger numbers:
[16, 81, 84, 32, 500];*/
'use strict'


const arr1 = [15, 45, 84, 32, 99];
const arr2 = [16, 81, 13, 24, 500];

const result = [];

for (let i = 0; i < arr1.length; i++) {
  result.push(Math.max(arr1[i], arr2[i]))
}

console.log(result);


/**if (arr1[i] > arr2[i]) {
  result.push(arr1[i])
} else {
  result.push(arr2[i])
} */