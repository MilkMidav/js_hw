'use strict'

function toGrayscale(array) {
  const result = [];

  result.push(Math.floor(array[0][0] * 0.3 + array[0][1] * 0.59 + array[0][2] * 0.11));
  result.push(Math.floor(array[1][0] * 0.3 + array[1][1] * 0.59 + array[1][2] * 0.11));
  result.push(Math.floor(array[2][0] * 0.3 + array[2][1] * 0.59 + array[2][2] * 0.11));

  return result;
} 


console.log(toGrayscale([[171, 15, 0], [182, 53, 144], [14, 99, 150]]))