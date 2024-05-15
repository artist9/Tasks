import getTheNearestLocation from "./my.js";

const arr = [
  ["Park", [10, 5]],

  ["Sea", [1, 3]],

  ["Museum", [8, 4]],
];

const currentPoint = [5, 5];

console.log(getTheNearestLocation(arr, currentPoint));
console.log(getTheNearestLocation([], currentPoint));
