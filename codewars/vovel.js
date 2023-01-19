/**Check the number of vowels in the string. 
 * The method must return a boolean value and be case insensitive. 
 * The string can contain any character. */

function vowelCount(string) {
  const vowels = 'aeiouAEIOU';
  let counter = 0;
  
  for(let i = 0; i < string.length ; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      counter += 1;
    }
  
  }
  return counter;
}


console.log(vowelCount('sfwgnyteqdfhke'))