/**Given a string of names: "Kevin, Steve, Jake, Bill, Paul, Susan, Ann" 
 * create a new string that will contain every 2nd name from the first one: "Kevin, Jake, Paul, Ann" */

'use strict'

const string = "Kevin, Steve, Jake, Bill, Paul, Susan, Ann"

const arr = string.split(', ');

let secondName = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      secondName.push(arr[i])
    } else {
      console.log("undefined values")
    }
}

const result = secondName.join(', ')

console.log(result)

