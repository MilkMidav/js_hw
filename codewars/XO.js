/**Check to see if a string has the same amount of 'x's and 'o's.
 *  The method must return a boolean and be case insensitive. 
 * The string can contain any char. */
"use strict"

function XO(str) {
  const toLower = str.toLowerCase()
  
  let counterX = 0;
  let counterO = 0;

  for (let i = 0; i < toLower.length; i++) {
    if (toLower[i] === 'o') {
      counterO++;
    }
    if (toLower[i] === 'x') {
      counterX++;
    }
  }

  return counterX === counterO;
}

console.log(XO("xxo"));