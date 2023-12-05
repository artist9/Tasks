export default function formattedTime(n) {
  const hours = n < 1440 ? Math.floor(n / 60) : Math.floor((n % 1440) / 60);
  const minutes = n % 60;
  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
