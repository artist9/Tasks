import { flatten } from "./my.js";

// Для пустого массива возвращается []

console.log(flatten([])); // []

console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]

console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]
