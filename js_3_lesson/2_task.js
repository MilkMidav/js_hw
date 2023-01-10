/** Given a string: Check-this-awesome-sentence reverse the words 
 * in it (NOT CHARACTERS): sentence-awesome-this-Check*/
'use strict'

const string = "Check-this-awesome-sentence"

const arr = string.split('-');

console.log(arr);

const arrRev = arr.reverse();

const toString = arrRev.join('-');

console.log(toString);