export default function Projects() {
  const projects = [
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
      title: "Note-taker",
      description:
        "Welcome to Note-Taker, a user-friendly digital sticky notes application built with Python Tkinter! This GUI project focuses on enabling users, primarily students, to effortlessly create and manage convenient digital sticky notes.",
      image: "/note_taker.png",
      skills: ["Python", "Tkinter", "GUI"],
      github: "https://github.com/nataly-tuong/Note-Taker",
      website: null,
    },
    {
      title: "Recycle-Game",
      description:
        "Welcome to Recycle Game, an educational command-line adventure that teaches proper recycling practices! Help Super-Recycler defeat Dr. Pollution Wizard by correctly sorting recyclable and non-recyclable items.",
      image: "/recycle_game.png",
      skills: ["Java", "OOP"],
      github: "https://github.com/nataly-tuong/Recycle-Game",
      website: null,
    },
    {
      title: "Kittyland",
      description:
        "Welcome to Kittyland, a simple HTML/CSS cat showcase featuring social media links for each feline friend! This is the original version that inspired Meowbook - built to practice basic web development fundamentals.",
      image: "/kittyland.png",
      skills: ["HTML", "CSS"],
      github: "https://github.com/nataly-tuong/kittyland",
      website: "https://nataly-tuong.github.io/kittyland",
    },
  ];

  return (
    <section id="Projects" className="relative bg-black">
      <div className="absolute inset-0 bg-[url('/Texturelabs_Details_176M.jpg')] bg-cover bg-center z-0"></div>
      <div className="relative z-10 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-16">
        <h3 className="text-5xl sm:text-6xl font-bold mb-12 bg-gradient-to-r from-red-500 via-white to-red-500 text-transparent bg-clip-text inline-block">
          Projects
        </h3>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-black rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_20px_red] w-full"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover aspect-[4/3] sm:aspect-[16/9]"
                  />
                )}
                <div className="p-6 flex flex-col gap-4">
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
                          📎
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
