import { useEffect, useState } from "react";
import { timeIn } from "../lib/time";

// The current time in a time zone, refreshed every 20 seconds.
// Shows clients abroad when you're likely to reply.
export function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => timeIn(timeZone));
  useEffect(() => {
    const id = setInterval(() => setTime(timeIn(timeZone)), 20000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}
