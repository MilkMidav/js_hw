"use strict"

const input = prompt("Enter your mobile phone:");
if (!input.startsWith('+')) {
  console.log("Please start entering with '+380'")
} else if ((input.startsWith('+38063')) || (input.startsWith('+38093'))) {
  console.log("Life")
} else if ((input.startsWith('+38067')) || (input.startsWith('+38097')) || (input.startsWith('+38098'))) {
  console.log("Kyivstar")
} else if ((input.startsWith('+38050')) || (input.startsWith('+38066')) || (input.startsWith('+38095'))) {
  console.log("Vodafone")
} else {
  console.log("Unknown mobile operator")
}
