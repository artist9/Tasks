export default function swap(arr) {
  if (arr.length < 2) return arr;
  const a = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = a;

  return arr;
}
