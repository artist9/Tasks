export default function bubbleSort(arr) {
  let a = arr.length;
  if (a === 0) return [];
  do {
    for (let i = 0; i < a - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let b = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = b;
      }
    }
    a--;
  } while (a);
  return arr;
}
