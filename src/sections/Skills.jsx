import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import javaLogo from "/assets/java-original.svg";
import jsLogo from "/assets/javascript-original.svg";
import htmlLogo from "/assets/html5-original.svg";
import cssLogo from "/assets/css3-original.svg";
import pythonLogo from "/assets/python-original.svg";
import reactLogo from "/assets/react-original.svg";
import gitLogo from "/assets/git-original.svg";
import githubLogo from "/assets/github-original.svg";
import viteLogo from "/assets/vite-original.svg";
import gsapLogo from "/assets/gsap-white.svg";
import niceGUILogo from "/assets/niceGUILogo.png";
import mongoDBLogo from "/assets/mongodb-original-wordmark.svg";
import mySQLLogo from "/assets/mysql-original-wordmark.svg";
import postmanLogo from "/assets/postman-icon.svg";
import kotlinLogo from "/assets/kotlin-original.svg";

export default function Skills() {
  const topMarqueeRef = useRef(null);
  const bottomMarqueeRef = useRef(null);

  const sections = [
    {
      title: "Frontend",
      icon: "<>",
      items: [
        { name: "React", logo: reactLogo },
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "Tailwind" },
        { name: "Vite", logo: viteLogo },
        { name: "GSAP", logo: gsapLogo },
      ],
    },
    {
      title: "Backend",
      icon: "<>",
      items: [
        { name: "Java", logo: javaLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "Python", logo: pythonLogo },
        { name: "Kotlin", logo: kotlinLogo },
        { name: "NiceGUI", logo: niceGUILogo },
      ],
    },
    {
      title: "Database",
      icon: "<>",
      items: [
        { name: "MongoDB", logo: mongoDBLogo },
        { name: "MySQL", logo: mySQLLogo },
      ],
    },
    {
      title: "Tools",
      icon: "<>",
      items: [
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "Postman", logo: postmanLogo },
      ],
    },
  ];

  const marqueeItems = [
    "TECHNOLOGIES",
    "+",
    "SKILLS",
    "+",
    "TOOLS",
    "+",
    "FRAMEWORKS",
    "+",
    "LANGUAGES",
    "+",
  ];

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const distance = isMobile ? "-50%" : "-30%";
    const duration = isMobile ? 10 : 4;

    gsap.set(topMarqueeRef.current, { x: "0%" });
    gsap.to(topMarqueeRef.current, {
      x: distance,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    gsap.set(bottomMarqueeRef.current, { x: isMobile ? "-50%" : "-30%" });
    gsap.to(bottomMarqueeRef.current, {
      x: "0%",
      duration: duration,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section id="Skills" className="bg-black text-white py-8 md:py-12">
      <div className="mx-auto max-w-7xl lg:max-w-[85rem] px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden w-[100vw] mb-6 left-1/2 -translate-x-1/2">
          <div
            ref={topMarqueeRef}
            className="flex w-max items-center gap-x-10 text-5xl md:text-6xl lg:text-6xl font-bodoni font-bold whitespace-nowrap"
          >
            {Array(3)
              .fill(marqueeItems)
              .flat()
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>

        <div className="relative w-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] p-5 sm:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(900px 350px at 20% 0%, rgba(239,68,68,0.4), transparent 70%), radial-gradient(700px 300px at 80% 100%, rgba(239,68,68,0.2), transparent 70%)",
            }}
          />

          <div className="relative space-y-4">
            {sections.map((sec) => (
              <div key={sec.title} className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 font-sans font-bold">
                      {sec.icon}
                    </span>
                    <h4 className="text-red-500 font-sans tracking-[0.2em] uppercase text-sm sm:text-lg font-bold">
                      {sec.title}
                    </h4>
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="flex flex-wrap gap-4">
                  {sec.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm sm:text-base font-sans tracking-wide text-white/80 hover:bg-white/10 hover:border-white/30 transition-colors"
                    >
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-5 w-5 object-contain"
                        />
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden w-[100vw] mt-6 left-1/2 -translate-x-1/2">
          <div
            ref={bottomMarqueeRef}
            className="flex w-max items-center gap-x-10 text-5xl md:text-6xl lg:text-6xl font-bodoni font-bold whitespace-nowrap"
          >
            {Array(3)
              .fill(marqueeItems)
              .flat()
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
