import githubLogo from "/assets/github-original.svg";

export default function Projects() {
  const projects = [
    {
      title: "KokoSpeak",
      description:
        "A user-friendly interface for Kokoro, an open-source AI text-to-speech tool. KokoSpeak allows you to run Kokoro locally, providing a seamless experience for generating speech in multiple languages using Python.",
      image: "/kokoro_screenshot.png",
      skills: ["Python", "AI", "UI/UX", "Tailwind", "CSS", "HTML", "NiceGUI"],
      github: "https://github.com/nataly-tuong/koko",
      website: null,
    },
    {
      title: "Nataly's Portfolio",
      description:
        "My personal portfolio showcasing projects, skills, and interactive animations using React.js, GSAP, TailwindCSS, and modern frontend practices.",
      image: "/portfolio_screenshot.png",
      skills: ["React.js", "JavaScript", "HTML/CSS", "GSAP", "TailwindCSS"],
      github: "https://github.com/nataly-tuong/portfolio",
      website: "https://nataly-tuong.github.io/portfolio",
    },
    {
      title: "Santa Monica Sunsets",
      description:
        "Designed and developed a fictional responsive agency website inspired by Santa Monica sunsets, using HTML5, CSS3, and Tailwind with mobile-first design.",
      image: "/santa_monica_sunsets.png",
      skills: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/nataly-tuong/santa-monica-sunsets",
      website: "https://nataly-tuong.github.io/santa-monica-sunsets",
    },
    {
      title: "Simple-Notes",
      description:
        "Welcome to Simple-Notes, a user-friendly digital sticky notes application built with Python Tkinter! This GUI project focuses on enabling users, primarily students, to effortlessly create and manage convenient digital sticky notes.",
      image: "/note_taker.png",
      skills: ["Python", "Tkinter", "GUI"],
      github: "https://github.com/nataly-tuong/Note-Taker",
      website: null,
    },
    {
      title: "Super-Recycler's Journey",
      description:
        "Welcome to Super-Recycler's Journey, an educational command-line adventure that teaches proper recycling practices! Help Super-Recycler defeat Dr. Pollution Wizard by correctly sorting recyclable and non-recyclable items.",
      image: "/recycle_game.png",
      skills: ["Java", "OOP"],
      github: "https://github.com/nataly-tuong/Recycle-Game",
      website: null,
    },
  ];

  return (
    <section id="Projects" className="relative bg-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0
        bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)]
        [background-size:48px_48px]"
      />
      <div className="relative z-10 text-white py-12 sm:py-16 md:py-20 px-8 sm:px-15 lg:px-16">
        <h3 className="text-5xl text-white pb-5 font-bodoni sm:text-6xl font-bold mb-12">
          Projects
        </h3>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] w-full"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(900px 350px at 25% 0%, rgba(239,68,68,0.8), transparent 80%), radial-gradient(700px 300px at 80% 100%, rgba(239,68,68,0.1), transparent 70%)",
                  }}
                />

                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full object-cover aspect-[4/3] sm:aspect-[16/9]"
                  />
                )}
                <div className="relative p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl sm:text-2xl font-semibold">
                      {project.title}
                    </h4>
                    <div className="flex gap-3 text-white text-lg">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors"
                        >
                          <img
                            src={githubLogo}
                            alt="github"
                            className="bg-white rounded-2xl w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                          />
                        </a>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors"
                        >
                          🌐
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
