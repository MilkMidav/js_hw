'use strict'

function sum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result += sum(arr[i])
    }
    if (typeof arr[i] === 'number') {
      result += arr[i];
    }
  }

  return result;
}

console.log(sum([1, 2, 3, [4, 5, [6, 7, 8, 9, [10]]]]))
console.log(sum([[10], 10, 12, [34, 42], 8, [[0, 11]]]))