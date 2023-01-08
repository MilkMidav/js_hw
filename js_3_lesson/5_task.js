/**Given an array of random values and types:
const arr = ['Test', 18, true, 'Wow', 11, 54, 'beta', undefined];
Create a new array that will only consist of objects of array's 
first element's type (e.g. if the first element is a string, 
then we only keep strings. If it's a boolean then we only keep booleans) */

'use strict'

const arr = ['Test', 18, true, 'Wow', 11, 54, 'beta', undefined];

const firstElementType = typeof arr[0];

const result = []

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === firstElementType) {
    result.push(arr[i])
  }
}

console.log(result);