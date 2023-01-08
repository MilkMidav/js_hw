/**Given a string of numbers: 025468 create a new string that will have hyphens between each two even numbers: 0-254-6-8 */

'use strict'

const str = "025468";
let newArr = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] % 2 === 0 && str[i - 1] % 2 === 0) {
    console.log(str[i], str[i - 1]);
    newArr.push(parseInt('-', str[i]));
  } else {
    newArr.push(parseInt(str[i]));
  }
}

const result = newArr.join((""));

console.log(result);