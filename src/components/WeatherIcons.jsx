// The Weather Dashboard's icon set, redrawn here for the case study.
// Seven icons from three shapes: a sun, a moon and a cloud.
const sun =
  "M32 22a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM32 8v6M32 50v6M8 32h6M50 32h6M15 15l4 4M45 45l4 4M49 15l-4 4M19 45l-4 4";
const moon = "M44 40A18 18 0 0 1 24 14a18 18 0 1 0 20 26z";
const cloud = "M18 46a10 10 0 0 1 1-20 14 14 0 0 1 27 4 8 8 0 0 1-2 16z";

const icons = [
  { name: "Clear", paths: [sun] },
  { name: "Night", paths: [moon] },
  { name: "Partly cloudy", group: true },
  { name: "Cloudy", paths: [cloud] },
  { name: "Fog", paths: ["M10 24h44M14 34h36M10 44h44"] },
  { name: "Rain", paths: [cloud, "M22 52l-3 6M34 52l-3 6M46 52l-3 6"] },
  { name: "Snow", paths: [cloud, "M22 54v.1M34 54v.1M46 54v.1M28 58v.1M40 58v.1"] },
  { name: "Storm", paths: [cloud, "M34 44l-6 8h8l-5 8"] },
];

export default function WeatherIcons() {
  return (
    <ul className="grid grid-cols-4 gap-3 sm:grid-cols-8">
      {icons.map((icon) => (
        <li
          key={icon.name}
          className="flex flex-col items-center gap-3 rounded-2xl bg-[#2a3466] px-2 py-5 text-[#f4f7fc]"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {icon.group ? (
              <>
                <g transform="translate(-6,-8) scale(.7)">
                  <path d={sun} />
                </g>
                <g transform="translate(6,6) scale(.8)">
                  <path d={cloud} />
                </g>
              </>
            ) : (
              icon.paths.map((d) => <path key={d} d={d} />)
            )}
          </svg>
          <span className="text-center text-xs opacity-80">{icon.name}</span>
        </li>
      ))}
    </ul>
  );
}
