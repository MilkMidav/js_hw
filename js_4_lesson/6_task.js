/**
Write a function that converts rgb to HEX 
(should accept 3 numbers and return a string that represents the value in hex): */
'use strict'

function rgbToHex(num1, num2, num3) {
  let hexNum1 = num1.toString(16);
  let hexNum2 = num2.toString(16);
  let hexNum3 = num3.toString(16);

  if (hexNum1.length < 2) {
    hexNum1 = '0' + hexNum1;
  } 

  if (hexNum2.length < 2) {
    hexNum2 = '0' + hexNum2;
  }

  if (hexNum3.length < 2) {
    hexNum3 = '0' + hexNum3;
  }

  const result = `#${hexNum1 + hexNum2 + hexNum3}`;

  return result.toUpperCase();
}

console.log(rgbToHex(255, 255, 255));
console.log(rgbToHex(172, 155, 11));
console.log(rgbToHex(0, 203, 15));

