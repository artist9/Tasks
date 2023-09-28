export default function a(n) {
  for (let i = 0; i < 10; i++) {
    n = String(n)
      .split("")
      .reduce((a, b) => a + b ** 2, 0);
  }
  return n === 1;
}
