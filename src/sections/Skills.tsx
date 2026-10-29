import type { JSX } from "react";
import { skillSections } from "../data/skills";

export default function Skills(): JSX.Element {
  return (
    <section
      id="Skills"
      className="relative bg-abyss text-white py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl lg:max-w-[85rem] px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">
        <span className="bracket-label block">
          <span className="bracket">( </span>02
          <span className="bracket"> )</span>
          &nbsp;&nbsp;STACK
        </span>
        <h3 className="font-bodoni text-5xl sm:text-6xl font-medium text-secondaryAccent mt-4 relative inline-block">
          Skills
        </h3>
        <p className="mt-4 max-w-lg text-white/50 font-noto text-sm sm:text-base">
          Languages, frameworks and tools.
        </p>

        <div className="w-full max-w-5xl mx-auto bg-black rounded-sm grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 px-6 py-10 mt-12 sm:px-10 sm:py-12">
          {skillSections.map((sec) => (
            <div key={sec.title} className="flex flex-col items-center">
              <h4 className="font-bodoni text-xl sm:text-2xl text-secondaryAccent font-medium">
                {sec.title}
              </h4>
              <div className="mt-4 flex flex-col items-center gap-2.5">
                {sec.items.map((item) => (
                  <span
                    key={item.name}
                    className="group inline-flex items-center justify-center gap-2.5 text-white/45 hover:text-white/80 transition-colors"
                  >
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt=""
                        className="h-4 w-4 object-contain grayscale opacity-50 brightness-[1.8] contrast-[0.7] group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                      />
                    ) : (
                      <span className="h-1 w-1 rounded-full bg-accentPink/60 group-hover:bg-accentPink" />
                    )}
                    <span className="font-noto text-sm">{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
