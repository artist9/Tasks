export default function isPowerOfThree(n) {
  return Number.isInteger(+(Math.log(n) / Math.log(3)).toFixed(4))
    ? `true (3^${Math.round(Math.log(n) / Math.log(3))})`
    : "false";
}
