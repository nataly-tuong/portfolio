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
import tailwindLogo from "/assets/tailwindcss-original.svg";
import cLogo from "/assets/c-original.svg";
import springLogo from "/assets/spring-original.svg";
import djangoLogo from "/assets/django-plain.svg";
import bootstrapLogo from "/assets/bootstrap-original.svg";
import Sparkle from "../components/Sparkle";

export default function Skills() {
  const sections = [
    {
      title: "Frontend",
      items: [
        { name: "React", logo: reactLogo },
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "Tailwind", logo: tailwindLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
        { name: "Vite", logo: viteLogo },
        { name: "GSAP", logo: gsapLogo },
        { name: "NiceGUI", logo: niceGUILogo },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Java", logo: javaLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "Python", logo: pythonLogo },
        { name: "Kotlin", logo: kotlinLogo },
        { name: "C", logo: cLogo },
        { name: "SpringBoot", logo: springLogo },
        { name: "Django", logo: djangoLogo },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", logo: mongoDBLogo },
        { name: "MySQL", logo: mySQLLogo },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "Postman", logo: postmanLogo },
      ],
    },
  ];

  return (
    <section id="Skills" className="relative bg-abyss text-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl lg:max-w-[85rem] px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center">
        <span className="bracket-label block">
          <span className="bracket">( </span>02<span className="bracket"> )</span>
          &nbsp;&nbsp;STACK
        </span>
        <h3 className="font-bodoni text-5xl sm:text-6xl font-medium text-secondaryAccent mt-4 relative inline-block">
          Skills
          <Sparkle
            trigger="#Skills"
            hue={100}
            className="absolute -top-2 -right-9 w-8 h-8 sm:w-9 sm:h-9"
          />
        </h3>
        <p className="mt-4 max-w-lg text-white/50 font-noto text-sm sm:text-base">
          Languages, frameworks and tools.
        </p>

        <div className="w-full max-w-5xl mx-auto bg-black rounded-sm grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 px-6 py-10 mt-12 sm:px-10 sm:py-12">
          {sections.map((sec) => (
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
