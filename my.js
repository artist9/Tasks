export default function countUniqChars(str) {
  let set = new Set(
    str
      .split("")
      .map((i) => i.toLowerCase())
      .filter((i) => i != " ")
  );
  return set.size;
}
