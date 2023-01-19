function sumTwoSmallestNumbers(array) {  
  
  let smallest = array[0];
  
  let secondSmallest = array[1];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > smallest && array[i] < secondSmallest) {
      secondSmallest = array[i];
    }
  }
  return secondSmallest + smallest;
}

const arr = [23, 71, 33, 82, 1];

console.log(sumTwoSmallestNumbers(arr))

/** SECOND SOLUTION*/

function sumTwoSmallestNumbers2(array){
  let temp;

  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }  
  return array[0] + array [1]
}

console.log(sumTwoSmallestNumbers2(arr))