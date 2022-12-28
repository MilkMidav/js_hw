"use strict"

const num1 = prompt("Number 1:");
const num2 = prompt("Number 2:");
const sign = prompt("Sign: ");
if (typeof num1 !== 'number') {
  console.log("huinya")
} else if (sign === '+') {
  const calc = num1 + num2;
  console.log("Finally a result:" + calc);
} else if (sign === '-'){
  const calc = num1 - num2;
  console.log("Finally a result:" + calc);
} else if (sign === '/') {
  const calc = num1 / num2;
  console.log("Finally a result:" + calc);
} else if (sign === '*') {
  const calc = num1 * num2;
  console.log("Finally a result:" + calc);
} else {
  console.log("undefined values");
}

