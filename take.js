import dnaToRna from "./my.js";

console.log(dnaToRna("ACGTGGTCTTAA")); // 'UGCACCAGAAUU'
console.log(dnaToRna("CCGTA")); // 'GGCAU'
console.log(dnaToRna("")); // ''
console.log(dnaToRna("ACNTG")); // null
