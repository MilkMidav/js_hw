/**Given a string of numbers: 025468 create a new string that will have hyphens between each two even numbers: 0-254-6-8 */

'use strict'

const str = "025468";

const newArr = [];

for (let i = 0; i < str.length; i++) {
  if (Number(str[i]) % 2 === 0 && Number(str[i - 1]) % 2 === 0) {
    newArr.push('-', str[i]);
  } else {
    newArr.push(str[i]);
  }
}

const result = newArr.join((""));

console.log(result);