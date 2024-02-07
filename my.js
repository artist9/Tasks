export default function getWeekends(a) {
  const obj = {
    long: ["saturday", "sunday"],
    short: ["sat", "sun"],
  };
  return obj[a];
}
