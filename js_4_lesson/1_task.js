const card = "4000001234567898"

function calcLuhnMultiplicationAndSubtraction(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      parseInt(arr[i] *= 2);
      if (arr[i] >= 10) {
        parseInt(arr[i] -= 9)
      }
    }
  }
}

function isCardValid(string) {

  const arr = string.split("")
  const lastDigit = parseInt(arr.pop());

  calcLuhnMultiplicationAndSubtraction(arr);
  
  let total = 0

  for (let j = 0; j < arr.length; j++) {
    total = total + parseInt(arr[j]) 
  }

  const result = total + lastDigit;

  if (result % 10 === 0) {
    return true
  }
  return false
}

console.log(isCardValid(card))