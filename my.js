function revers(arr) {
  const al = arr.length;
  const middle = Math.floor(al / 2);
  for (let i = 0; i < middle; i++) {
    const temp = arr[i];
    arr[i] = arr[al - i - 1];
    arr[al - i - 1] = temp;
  }
}

export { revers };
