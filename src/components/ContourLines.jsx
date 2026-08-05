import { useId } from "react";

export default function ContourLines({ className = "", tint = "blue" }) {
  const rgb = tint === "blue" ? "0.55 0.65 0.86" : "1 1 1";
  const [r, g, b] = rgb.split(" ");
  const filterId = `ocean-contours-${useId()}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="contour-drift absolute inset-0 h-[130%] w-[130%] -left-[15%] -top-[15%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.0035 0.005"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feComponentTransfer in="noise" result="bands">
              <feFuncA type="discrete" tableValues="0 1 0 1 0 1" />
            </feComponentTransfer>
            <feMorphology in="bands" operator="erode" radius="1" result="eroded" />
            <feComposite in="bands" in2="eroded" operator="out" result="lines" />
            <feColorMatrix
              in="lines"
              type="matrix"
              values={`0 0 0 0 ${r}  0 0 0 0 ${g}  0 0 0 0 ${b}  0 0 0 2.6 0`}
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 35%, transparent 0%, transparent 35%, #020304 92%)",
        }}
      />
    </div>
  );
}
