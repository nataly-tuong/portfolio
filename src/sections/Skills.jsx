import { useRef } from "react";
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

    gsap.to(headersContainer, {
      x: "-50%",
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    gsap.set(secondHeadersContainer, { x: "-50%" });
    gsap.to(secondHeadersContainer, {
      x: "0%",
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section id="Skills">
      <div className="bg-black w-full h-100 relative text-white px-15 py-20">
        <div
          className="absolute top-2 right-15
                        bg-[url('Texturelabs_LensFX_242S.jpg')]
                        bg-cover bg-center
                        mix-blend-plus-lighter
                        w-18 h-18 brightness-120
                        rotate-[120deg]
                        animate-pulse z-50"
        ></div>

        <div className="relative overflow-hidden whitespace-nowrap mb-6">
          <div ref={headersRef} className="flex gap-x-5 inline-flex">
            <h3 className="skills-header text-5xl font-semibold">SKILLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LIBRARIES</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">TOOLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">FRAMEWORKS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LANGUAGES</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">SKILLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LIBRARIES</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">TOOLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">FRAMEWORKS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LANGUAGES</h3>
          </div>

          <div className="absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent h-full w-32 pointer-events-none"></div>
          <div className="absolute top-0 right-0 z-10 bg-gradient-to-l from-black to-transparent h-full w-32 pointer-events-none"></div>
        </div>

        <div className="skill-box flex justify-center gap-4" ref={scrollRef}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="mt-4 bg-gradient-to-b from-secondaryAccent to-mainAccent rounded-2xl text-white font-semibold p-0.5"
            >
              <span className="flex items-center gap-2 w-full bg-black text-white p-2.5 rounded-2xl">
                <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden whitespace-nowrap mb-6 mt-6">
          <div ref={secondHeadersRef} className="flex gap-x-5 inline-flex">
            <h3 className="skills-header text-5xl font-semibold">SKILLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LIBRARIES</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">TOOLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">FRAMEWORKS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LANGUAGES</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">SKILLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LIBRARIES</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">TOOLS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">FRAMEWORKS</h3>
            <h3 className="skills-header text-5xl font-semibold">+</h3>
            <h3 className="skills-header text-5xl font-semibold">LANGUAGES</h3>
          </div>

          <div className="absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent h-full w-32 pointer-events-none"></div>
          <div className="absolute top-0 right-0 z-10 bg-gradient-to-l from-black to-transparent h-full w-32 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
