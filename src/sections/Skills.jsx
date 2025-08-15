export default function Skills() {
  const skills = [
    { name: "Java", logo: "/portfolio/assets/java-original.svg" },
    { name: "JavaScript", logo: "/portfolio/assets/javascript-original.svg" },
    { name: "HTML", logo: "/portfolio/assets/html5-original.svg" },
    { name: "CSS", logo: "/portfolio/assets/css3-original.svg" },
    { name: "Python", logo: "/portfolio/assets/python-original.svg" },
    { name: "React.js", logo: "/portfolio/assets/react-original.svg" },
  ];

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
        <div className="flex flex-wrap justify-center gap-4">
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
