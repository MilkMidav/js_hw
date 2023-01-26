

function paginate(array, size) {
  const result = [];

  let tempArr = [];
  for (let i = 0; i < array.length; i++) {
    tempArr.push(array[i]);
    
    if (tempArr.length === size) {
      result.push(tempArr);
      tempArr = [];
    } 
  }
  
  if (tempArr.length === size) result.push(tempArr);

  return result;
}

console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));