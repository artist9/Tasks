import isBracketStructureBalanced from "./my.js";

console.log(isBracketStructureBalanced("(>")); // false

console.log(isBracketStructureBalanced("()")); // true

console.log(isBracketStructureBalanced("[()]")); // true

console.log(isBracketStructureBalanced("{<>}}")); // false
