import swap from "./my.js";

console.log(swap([])); // []

console.log(swap([1])); // [1]

console.log(swap([1, 2])); // [2, 1]

console.log(swap(["one", "two", "three"])); // ['three', 'two', 'one']
