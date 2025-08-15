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
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    gsap.from(boxes, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out",
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
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div
          className="skill-box flex flex-wrap justify-center gap-4"
          ref={scrollRef}
        >
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
      </div>
    </section>
  );
}
