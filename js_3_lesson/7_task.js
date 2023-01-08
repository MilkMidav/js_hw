/** Given a string, remove all dashes in it: Hello new world hey */

'use strict'

const string = "Hello - new - world - hey";

//first solution

const result = string.replaceAll('- ', '');

console.log(result);

//second solution

const arr = string.split(' - ');

const toString = arr.join(' ');

console.log(toString);