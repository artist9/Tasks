function diff(a, b) {
  //if (a === 0) a = 360;
  return Math.min(
    a > b ? a - b : b - a,
    a === 0 ? 360 - b : b === 0 ? 360 - a : 360
  );
}

console.log(diff(0, 45)); // не 315, а 45, потому что 45 меньше
console.log(diff(0, 180));
console.log(diff(0, 190)); // не 190, а 170, потому что 170 меньше
console.log(diff(120, 280));
console.log(diff(45, 0)); // не 315, а 45, потому что 45 меньше
console.log(diff(180, 0));
console.log(diff(190, 0)); // не 190, а 170, потому что 170 меньше
console.log(diff(120, 280));
