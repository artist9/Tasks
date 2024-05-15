export default function getTheNearestLocation(arr, currentPoint) {
  if (!arr.length) return null;
  let point = 0;
  let min = Infinity;
  let getDistance = (arr, arr1) => {
    const [x, y] = arr;
    const [x1, y1] = arr1;
    return Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);
  };
  for (let [name, position] of arr) {
    let res = getDistance(position, currentPoint);
    if (res < min) {
      min = res;
      point = [name, position];
    }
  }
  return point;
}
