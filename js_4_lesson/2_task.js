/**Write a function that accepts an array of strings and an optional number 
 * (default value is 5). This function should return a new array containing
 *  strings with length <= the given number */
'use strict'

function wordsLengthValidation(array, length = 5) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === length) {
      result.push(array[i])
    }
  }

  return result;
}

const words = ['test', 'delegation', 'forward', 'bliss', 'hop'];

const result = wordsLengthValidation(words, 4)

console.log(result)
