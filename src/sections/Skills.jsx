import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Skills() {
  const skills = [
    { name: "Java", logo: "/portfolio/assets/java-original.svg" },
    { name: "JavaScript", logo: "/portfolio/assets/javascript-original.svg" },
    { name: "HTML", logo: "/portfolio/assets/html5-original.svg" },
    { name: "CSS", logo: "/portfolio/assets/css3-original.svg" },
    { name: "Python", logo: "/portfolio/assets/python-original.svg" },
    { name: "React.js", logo: "/portfolio/assets/react-original.svg" },
    { name: "Git", logo: "/portfolio/assets/git-original.svg" },
    { name: "GitHub", logo: "/portfolio/assets/github-original.svg" },
    { name: "Vite", logo: "/portfolio/assets/vite-original.svg" },
    { name: "GSAP", logo: "/portfolio/assets/gsap-white.svg" },
  ];

  const scrollRef = useRef();
  const headersRef = useRef();
  const secondHeadersRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    gsap.fromTo(
      boxes,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
        },
      }
    );

    const headersContainer = headersRef.current;
    const secondHeadersContainer = secondHeadersRef.current;

    const isMobile = window.innerWidth < 768;
    const distance = isMobile ? "-50%" : "-30%";
    const duration = isMobile ? 10 : 4;

    gsap.set(headersContainer, { x: "0%" });
    gsap.to(headersContainer, {
      x: distance,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    gsap.set(secondHeadersContainer, { x: isMobile ? "-50%" : "-30%" });
    gsap.to(secondHeadersContainer, {
      x: "0%",
      duration: duration,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const headerItems = [
    "SKILLS",
    "+",
    "LIBRARIES",
    "+",
    "TOOLS",
    "+",
    "FRAMEWORKS",
    "+",
    "LANGUAGES",
    "+",
  ];

  return (
    <section id="Skills">
      <div className="bg-black w-full relative text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        <div
          className="absolute top-2 right-4 sm:top-2 sm:right-8
                     bg-[url('Texturelabs_LensFX_242S.jpg')]
                     bg-cover bg-center
                     mix-blend-plus-lighter
                     w-12 h-12 sm:w-16 sm:h-16
                     brightness-120
                     rotate-[120deg]
                     animate-pulse z-50"
        ></div>

        <div className="relative overflow-hidden whitespace-nowrap mb-6">
          <div
            ref={headersRef}
            className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 inline-flex"
          >
            {Array(3)
              .fill(headerItems)
              .flat()
              .map((text, i) => (
                <h3
                  key={i}
                  className="skills-header skills-style text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                >
                  {text}
                </h3>
              ))}
          </div>

          <div className="absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent h-full w-12 sm:w-24 pointer-events-none"></div>
          <div className="absolute top-0 right-0 z-10 bg-gradient-to-l from-black to-transparent h-full w-12 sm:w-24 pointer-events-none"></div>
        </div>

        <div
          className="skill-box flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6"
          ref={scrollRef}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="mt-2 sm:mt-3 bg-gradient-to-b from-secondaryAccent to-mainAccent rounded-lg sm:rounded-xl md:rounded-2xl text-white font-semibold p-0.5"
            >
              <span className="flex items-center gap-1 sm:gap-2 w-full bg-black text-white p-2 sm:p-2.5 rounded-lg sm:rounded-xl md:rounded-2xl">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <span className="text-xs sm:text-sm md:text-base">
                  {skill.name}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden whitespace-nowrap mt-6">
          <div
            ref={secondHeadersRef}
            className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 inline-flex"
          >
            {Array(3)
              .fill(headerItems)
              .flat()
              .map((text, i) => (
                <h3
                  key={i}
                  className="skills-header skills-style text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                >
                  {text}
                </h3>
              ))}
          </div>

          <div className="absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent h-full w-12 sm:w-24 pointer-events-none"></div>
          <div className="absolute top-0 right-0 z-10 bg-gradient-to-l from-black to-transparent h-full w-12 sm:w-24 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
