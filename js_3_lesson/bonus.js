let number = 324;
let temp = 0;

while(number) {
  temp = temp * 10;
  // console.log(temp, number)
  temp = temp + (number % 10);
  // console.log(number, number % 10)
  number = Math.floor(number / 10);
}

console.log(temp)



