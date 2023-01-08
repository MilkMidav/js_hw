/**Given a two-dimensional array:
const num = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
];
Write a program to count the number of zeros in this array */
'use strict'

const numbers = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 1, 1],
]

const desiredNumber = 0;

let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] === desiredNumber) {
      counter++
    }
  }
}

console.log(counter);