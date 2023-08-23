function sumSquareDifference(n) {
  let a = 0;
  let b = 0;
  for (let i = 1; i <= n; i++) {
    a += i ** 2;
    b += i;
  }
  return b ** 2 - a;
}

console.log(sumSquareDifference(10));
