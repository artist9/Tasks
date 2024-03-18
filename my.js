export default function makeCensored(str, arr) {
  return str
    .split(" ")
    .map((i) => (arr.includes(i) ? "$#%!" : i))
    .join(" ");
}
