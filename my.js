export default function dnaToRna(str) {
  if (str === "") return "";
  let res = "";
  for (let i of str) {
    if (i === "G") res += "C";
    else if (i === "C") res += "G";
    else if (i === "T") res += "A";
    else if (i === "A") res += "U";
    else return null;
  }
  return res;
}
