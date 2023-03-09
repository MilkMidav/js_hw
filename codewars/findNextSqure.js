function findNextSquare(sq) {
  const num = Math.sqrt(sq);

  if (sq === num * num && Math.floor(num) === num) {
    return (num + 1) * (num + 1);
  }

  return -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(131));