import githubLogo from "/assets/github-original.svg";
import Sparkle from "../components/Sparkle";

export default function Projects() {
  const projects = [
    {
      title: "KokoSpeak",
      year: "2025",
      category: "AI TOOL",
      description:
        "A user-friendly interface for Kokoro, an open-source AI text-to-speech tool that runs locally and generates speech in multiple languages.",
      skills: ["Python", "AI", "UI/UX", "Tailwind", "NiceGUI"],
      github: "https://github.com/nataly-tuong/koko",
      website: null,
    },
    {
      title: "Nataly's Portfolio",
      year: "2025",
      category: "WEB",
      description:
        "This site: projects, skills, and interactive animations.",
      skills: ["React.js", "JavaScript", "GSAP", "TailwindCSS"],
      github: "https://github.com/nataly-tuong/portfolio",
      website: "https://nataly-tuong.github.io/portfolio",
    },
    {
      title: "RecipeBook",
      year: "2026",
      category: "WEB",
      description:
        "A web app for storing and organizing recipes.",
      skills: ["Java", "SpringBoot", "MySQL", "Maven", "Bootstrap"],
      github: null,
      website: null,
    },
    {
      title: "Pacific-Book-Hook",
      year: "2026",
      category: "WEB",
      description:
        "A book exchange platform where users list and trade books.",
      skills: ["Python", "Django"],
      github: null,
      website: null,
    },
  ];

  return (
    <section id="Projects" className="relative bg-abyss">
      <div className="relative z-10 text-white py-20 sm:py-28 px-8 sm:px-15 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <span className="bracket-label block">
            <span className="bracket">( </span>03<span className="bracket"> )</span>
            &nbsp;&nbsp;WORK
          </span>
          <h3 className="text-5xl text-secondaryAccent font-bodoni sm:text-6xl font-medium mt-4 relative inline-block">
            Projects
            <Sparkle
              trigger="#Projects"
              hue={60}
              className="absolute -top-2 -right-9 w-8 h-8 sm:w-9 sm:h-9"
            />
          </h3>
          <p className="mt-4 max-w-lg text-white/50 font-noto text-sm sm:text-base">
            Things I built.
          </p>

          <div className="mt-12 bg-black rounded-sm px-6 -mx-6 sm:px-8 sm:-mx-8 border-t border-white/10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_9rem_1fr_auto] items-start sm:items-center gap-x-4 gap-y-3 py-7 border-b border-white/10 transition-colors hover:border-mainAccent/30"
              >
                <span className="row-start-1 col-start-1 font-noto text-xs tracking-[0.2em] text-white/30 pt-1 sm:pt-0">
                  {project.year}
                </span>

                <span className="hidden sm:inline font-noto text-[0.65rem] tracking-[0.25em] text-mainAccent/70 uppercase">
                  {project.category}
                </span>

                <div className="row-start-2 sm:row-start-auto col-span-2 sm:col-span-1">
                  <h4 className="text-2xl sm:text-3xl font-bodoni font-medium text-secondaryAccent group-hover:text-mainAccent transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-white/45 text-sm sm:text-base font-noto max-w-xl">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[0.7rem] sm:text-xs font-noto tracking-wide text-white/35"
                      >
                        {skill}
                        {i < project.skills.length - 1 && (
                          <span className="text-white/15"> · </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="row-start-1 sm:row-start-auto col-start-2 sm:col-start-4 flex gap-3 text-white justify-self-end">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <img
                        src={githubLogo}
                        alt="github"
                        className="bg-white rounded-full w-4 h-4 sm:w-5 sm:h-5 p-[1px]"
                      />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="text-white/60 hover:text-accentPink transition-colors"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17 17 7M9 7h8v8"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
