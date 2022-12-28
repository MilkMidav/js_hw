"use strict"

const names = "Kate, Steve, Jack, Bob, John";
const input = prompt("Enter name:");
const result = names.slice(names.indexOf(input));

if (names.includes(input)) {
  console.log(result)
} else if (input[0].toLowerCase() === input[0]){
  console.log("don't write 'name' - write 'Name'")
} else {
  console.log("Name not found")
}





