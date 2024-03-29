import getSameCount from "./my.js";

// Общие повторяющиеся элементы: 1, 3, 2

console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])); // 3

// Общие повторяющиеся элементы: 4

console.log(getSameCount([1, 4, 4], [4, 8, 4])); // 1

// Общие повторяющиеся элементы: 1, 10

console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2

// Нет элементов

console.log(getSameCount([], [])); // 0
