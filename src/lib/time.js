// Reading the clock is kept out of components so they stay pure.
export function timeIn(timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());
}

export const currentYear = () => new Date().getFullYear();
