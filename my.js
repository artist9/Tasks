export const flatten = (arr) => {
  if (arr.length === 0) return [];
  const res = [];
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      res.push(...i);
    } else {
      res.push(i);
    }
  });
  return res;
};
