export default function reverse(str) {
  if (str === "") return "";
  let one = str[0];
  let two = str.slice(1);
  return reverse(two) + one;
}
