export default function invertCase(str) {
  return str
    .split("")
    .map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
    .join("");
}
