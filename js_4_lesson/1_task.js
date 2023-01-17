const card = "4000001234567899"

function isCreditCardValid(string) {
  const arr = string.split("")
  const lastDigit = parseInt(arr.pop());

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    if (i % 2 === 0) {
      arr[i] *= 2;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    if (arr[i] >= 10) {
      arr[i] -= 9
    }
  }
  
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
    total = total + arr[i]; 
  }

  const result = total + lastDigit;

  return result % 10 === 0;
}

console.log(isCreditCardValid(card))