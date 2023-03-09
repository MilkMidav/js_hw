function likes(arr) {
  if (arr.length === 0) return 'no one likes this';

  if (arr.length === 1) return `${arr[0]} likes this`;

  if (arr.length === 2) return `${arr[0]} and ${arr[1]} likes this`;

  if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`;
    
  if (arr.length > 3) return `${arr[0]}, ${arr[1]} and other ${arr.length - 2} likes this`
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));