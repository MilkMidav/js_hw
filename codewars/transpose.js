function transpose(matrix) {
  let arr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let midArr = [];
    
    for (let j = 0; j < matrix.length; j++) {
      midArr.push(matrix[i][j]);
    }
    arr.push(midArr)
    console.log(midArr)
  }
  return arr;
}

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]