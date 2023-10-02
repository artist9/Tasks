export default function isHappyTicket(n) {
  let a = n.length / 2;
  return (
    n
      .split("")
      .filter((c, d) => d < a)
      .reduce((a, b) => a + +b, 0) ===
    n
      .split("")
      .filter((c, d) => d >= a)
      .reduce((a, b) => a + +b, 0)
  );
}
