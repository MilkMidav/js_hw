/** Given an array of numbers: [801, 555, 31, 4, 738, 145, 473]  console.log the biggest number of that array*/
'use strict'

const arr = [801, 555, 31, 4, 738, 145, 473];

let biggest = arr[1];

for (i = 0; i < arr.length; i++) {
    if (biggest < arr[i] ) {
        biggest = arr[i];
    }
}
console.log(biggest);