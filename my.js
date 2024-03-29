export default function getSameCount(arr1, arr2) {
  const set = new Set();
  for (let i of arr1) {
    if (arr2.includes(i)) {
      set.add(i);
    }
  }
  return set.size;
}
