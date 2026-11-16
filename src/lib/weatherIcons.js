// The Weather Dashboard's icon set: seven icons from three shapes.
// Shared by the case study grid and the Playground switcher.
export const sun =
  "M32 22a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM32 8v6M32 50v6M8 32h6M50 32h6M15 15l4 4M45 45l4 4M49 15l-4 4M19 45l-4 4";
export const moon = "M44 40A18 18 0 0 1 24 14a18 18 0 1 0 20 26z";
export const cloud = "M18 46a10 10 0 0 1 1-20 14 14 0 0 1 27 4 8 8 0 0 1-2 16z";

export const icons = [
  { name: "Clear", paths: [sun] },
  { name: "Night", paths: [moon] },
  { name: "Partly cloudy", group: true },
  { name: "Cloudy", paths: [cloud] },
  { name: "Fog", paths: ["M10 24h44M14 34h36M10 44h44"] },
  { name: "Rain", paths: [cloud, "M22 52l-3 6M34 52l-3 6M46 52l-3 6"] },
  { name: "Snow", paths: [cloud, "M22 54v.1M34 54v.1M46 54v.1M28 58v.1M40 58v.1"] },
  { name: "Storm", paths: [cloud, "M34 44l-6 8h8l-5 8"] },
];

