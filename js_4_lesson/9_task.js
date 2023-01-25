'use strict'

function split(string, delimiter = '') {
  const result = [];
  
  let tempStr = '';
  let letterMatching = '';

  let delimiterIndex = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (delimiter === '') {
      result.push(string[i]);
      continue;
    }

    if (letterMatching.length < delimiter.length && string[i] !== delimiter[delimiterIndex] && letterMatching.length !== 0) {
      tempStr += letterMatching;
      letterMatching = '';
      delimiterIndex = 0;
    }

    if (letterMatching.length === delimiter.length) {
      result.push(tempStr);
      tempStr = '';
      letterMatching = '';
      delimiterIndex = 0;
    } 

    if (string[i] !== delimiter[delimiterIndex]) {
      delimiterIndex = 0;
      tempStr += string[i];
    }

    if (string[i] === delimiter[delimiterIndex]) {
      letterMatching += string[i];
      delimiterIndex += 1;
    } 
  }

  result.push(tempStr);
  
  return result;
}

console.log(split('Hello')); 
console.log(split('ABCXYZDHFXYTXYZBLA', 'XYZ'));
console.log(split('ABCXYZbDHFXYTXYZbBLA', 'XYZb'));  
console.log(split('TEST1-*--TEST2-*-*--TEST3-**-TEST4', '-*-') ); //[ 'TEST1', '-TEST2', '*--TEST3-**-TEST4' ]
console.log(split('Jake,Jim,Kate,John', ','));
console.log(split('Jake, Jim, Kate, John', ', '));  

