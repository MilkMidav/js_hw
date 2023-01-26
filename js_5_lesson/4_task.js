/** 4. Given a string, remove all DUPLICATED adjacent characters of every character:
 *removeAdjacentCharacters('AABBBCDDD') === 'ABCD';
  removeAdjacentCharacters('Hello World!') === 'Helo World!';
  removeAdjacentCharacters('ABC') === 'ABC';
*/

function removeAdjacentCharacters(string, i = 0, result = '') {
  if (i < string.length - 1){ // 9
    if (string[i] !== string[i + 1]) {
      result += string[i];
    } 
      
    return removeAdjacentCharacters(string, i + 1, result);
  }
  
  return result += string[i];
}

console.log(removeAdjacentCharacters('AABBBCDDD'));
console.log(removeAdjacentCharacters('Hello World!'));
console.log(removeAdjacentCharacters('ABC'));