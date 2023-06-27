function areBracketsBalanced(str) {
  let count = 0;
  for (let i of str) {
    if (i === "(") count++;
    if (i === ")") count--;
    if (count < 0) break;
  }
  return count === 0;
}

console.log(areBracketsBalanced("(())")); // true
console.log(areBracketsBalanced("((())")); // false
console.log(areBracketsBalanced(")((())")); // false
