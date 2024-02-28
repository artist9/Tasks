import { revers } from "./my.js";

const names = ["john", "smith", "karl"];

revers(names);

console.log(names); // => ['karl', 'smith', 'john']

revers(names);

console.log(names); // => ['john', 'smith', 'karl']
