function getSum(x, y) {
  if (x === y) {
  return x;
  }
  
  let result = 0;
  
  const minNumber = Math.min(x, y);
  const maxNumber = Math.max(x, y);
  
   for (let i = minNumber; i <= maxNumber; i++) {
      result += i;
  }
  
  return result;  
}

console.log(getSum(4,  6));