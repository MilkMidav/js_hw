"use strict"

const num1 = Number(prompt("Number 1:"));
const num2 = Number(prompt("Number 2:"));
const sign = prompt("Sign: ");
if ((!isNaN(num1) && !isNaN(num2))) {
  if (sign === '+') {
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
} else {
  console.log("Use numbers!");
}


