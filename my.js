export default function withoutTwoZeros(a, b) {
  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }

  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
}

/* Если число нулей больше чем число единиц хотя бы на 2, то это сделать невозможно:

   if (a > b + 1) {
     return 0;
   }

Если нужно расставить только нули или только единицы, то способ только один:

   if (a === 0 || b === 0) {
     return 1;
   }

Если начнём число с 1, то количество способов для хвоста withoutTwoZeros(a, b - 1).
   Если начнём с 01, то количество способов для хвоста withoutTwoZeros(a - 1, b - 1).
   Ставить в начало 00 мы не можем. Итого получается

return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);

*/
