import makeCensored from "./my.js";

const sentence = "When you play the game of thrones, you win or you die";

const result = makeCensored(sentence, ["die", "play"]);

console.log(result);

// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = "chicken chicken? chicken! chicken";

const result2 = makeCensored(sentence2, ["?", "chicken"]);

console.log(result2);

// '$#%! chicken? chicken! $#%!';
