// The Weather Dashboard's icon set, redrawn here for the case study.
// Seven icons from three shapes: a sun, a moon and a cloud.
import { icons, sun, cloud } from "../lib/weatherIcons";

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

// One icon on its own, e.g. for the Playground
export function WeatherGlyph({ icon, className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
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
  );
}
