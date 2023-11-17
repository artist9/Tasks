export default function reverseInt(n) {
  return n < 0
    ? -String(Math.abs(n)).split("").reverse().join("")
    : Math.abs(String(n).split("").reverse().join(""));
}
