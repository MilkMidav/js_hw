/**Check the number of vowels in the string. 
 * The method must be case insensitive. 
 * The string can contain any character. */
"use strict"

function vowelCount(string) {
  const vowels = 'aeiouAEIOU';
  let counter = 0;
  
  for(let i = 0; i < string.length ; i++) {
    if (vowels.includes(string[i])) {
      counter += 1;
    }
  }
  
  return counter;
}


console.log(vowelCount('sfwgnyteqdfhke'))