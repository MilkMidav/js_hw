function binaryArrayToNumber(arr) {
  const string = arr.join('');
  
  return parseInt(string, 2);
}

console.log(binaryArrayToNumber([1, 0, 0, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 0, 0, 1, 0, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 1, 0, 1, 0]));