function digitalRoot(n) {

  if (n < 10) return n;

  n = String(n);
  let sum = 0;

  for (i = 0; i < n.length; i++){
    sum += Number(n[i]);
  }
    
  if (sum >= 10) {
    return digitalRoot(sum);
  }
  
  return sum;
}

console.log(digitalRoot(16));
console.log(digitalRoot(456643454686906786897));

