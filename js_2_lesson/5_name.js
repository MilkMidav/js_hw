"use strict"

const names = "Kate, Steve, Jack, Bob, John";
const input = prompt("Enter name:");

if (names.includes(input)) {
  const result = names.slice(names.indexOf(input));
  console.log(result)
} else if (input[0] === input[0].toLowerCase()){
  console.log("don't write 'name' - write 'Name'")
} else {
  console.log("Name not found")
}





