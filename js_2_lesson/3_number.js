"use strict"

const input = prompt("Enter your mobile phone:");
if ((!input.includes('+'))) {
  console.log("Please start entering with '+380'")
} else if ((input.includes('+38063')) || (input.includes('+38093'))) {
  console.log("Life")
} else if ((input.includes('+38067')) || (input.includes('+38097'))) {
  console.log("Kyivstar")
} else if ((input.includes('+38050')) || (input.includes('+38066')) || (input.includes('+38095'))) {
  console.log("Vodafone")
} else {
  console.log("Unknown mobile operator")
}
