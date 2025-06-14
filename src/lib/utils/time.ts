export function getMinutesSince4am(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const total = hours * 60 + minutes;
  return (total >= 240) ? total - 240 : total + 1200;
}