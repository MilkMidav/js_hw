/**Given a string of names: "Kevin, Steve, Jake, Bill, Paul, Susan, Ann" 
 * create a new string that will contain every 2nd name from the first one: "Kevin, Jake, Paul, Ann" */

'use strict'

const string = "Kevin, Steve, Jake, Bill, Paul, Susan, Ann"

const arr = string.split(', ');

const arrNames = [];

for (let i = 0; i < arr.length; i += 2) {
  arrNames.push(arr[i])
}

const result = arrNames.join(', ')

console.log(result)

