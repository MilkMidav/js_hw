/** 3. Given an array of numbers, return the smallest number:
min([55, 19, 84, 1, 17, 29, 7]) === 1;*/
'use strict'

function min(array, i = 0) {
  if (i == array.length - 1){
    return array[array.length - 1];
  }
  
  return Math.min(array[i], min(array, i + 1));
}

console.log(min([55, 19, 84, 2, 17, 29, 7]))