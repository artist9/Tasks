export default function isBracketStructureBalanced(str) {
  const open = ["(", "[", "{", "<"];
  const close = [")", "]", "}", ">"];
  const stack = [];
  for (let i of str) {
    if (open.includes(i)) {
      stack.push(i);
    } else if (close.includes(i)) {
      const last = stack.pop();
      const index = close.indexOf(i);
      if (last !== open[index]) return false;
    }
  }
  return stack.length === 0;
}
