import get from "./my.js";

const cities = ["moscow", "london", "berlin", "porto"];
console.log(get(cities, 1)); // 'london'

console.log(get(cities, 4)); // null

console.log(get(cities, 10, "paris")); // 'paris'

console.log(get(cities, -1, "oops")); // 'oops'
