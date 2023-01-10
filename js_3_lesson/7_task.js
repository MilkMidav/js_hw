/** Given a string, remove all dashes in it: Hello new world hey */

'use strict'

const string = "Hello - new - world - hey";

const result = string.replaceAll('- ', '');

console.log(result);