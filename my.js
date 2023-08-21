function isPerfect(a) {
  let arr = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) arr.push(i);
  }
  return arr.reduce((a, b) => a + b, 0) === a * 2;
}

console.log(isPerfect(8128));
