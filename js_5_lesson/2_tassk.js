/**2. Given a string, return the first uppercased letter in it. 
 * If there are no uppercase letters RETURN UNDEFINED. 
 * NOT FALSE. NOT CONSOLE.LOG. NOT AN SMS:
firstUppercase('abCde') === 'C';
firstUppercase('alllowercase') === undefined; */

'use strict'

function firstUppercase(string, i = 0) {
  if (i === string.length) {
    return;
  } 
  if (string[i] === string[i].toUpperCase()) {
    return string[i];
  } 

  return firstUppercase(string, i += 1);
}

console.log(firstUppercase('alllowercase'));
console.log(firstUppercase('abCde'));

/**OTHER SOLUTION*/

function firstUppercase2(string, i = 0) {
  if (i === string.length) return; 

  return string[i] === string[i].toUpperCase() ? string[i] : firstUppercase2(string, i += 1);
}

console.log(firstUppercase2('alllowercase'));
console.log(firstUppercase2('abCde'));