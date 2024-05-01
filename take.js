import getIntersectionOfSortedArrays from "./my.js";

console.log(
  getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])
); // [10, 24]

console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []

console.log(getIntersectionOfSortedArrays([], [2])); // []
