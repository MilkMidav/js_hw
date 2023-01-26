let number = prompt("Enter your phone number with country code");

switch (number.substring(3, 6)) {
  case "097":
  case "098":
  case "067":
    console.log("Kyivstar");
    break;
  case "050":
  case "066":
  case "095":
    console.log("Vodafone");
    break;
  case "063":
  case "093":
    console.log("Life");
    break;
  default:
    console.log("Undefined operator");
};