let input = prompt("Enter year:");

if ((input % 4 === 0) || (input % 400 === 0)) {
  alert("It's a leap year")
  console.log("It's a leap year");
} else {
  alert("it's not a leap year")
  console.log ("it's not a leap year")
}