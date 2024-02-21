export default function get(a, b, c = "null") {
  return a.length <= b || b < 0 ? c : a[b];
}
