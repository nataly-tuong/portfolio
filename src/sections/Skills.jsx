export default function Skills() {
  const skills = [
    { name: "Java", logo: "/assets/java-original.svg" },
    { name: "JavaScript", logo: "/assets/javascript-original.svg" },
    { name: "HTML", logo: "/assets/html5-original.svg" },
    { name: "CSS", logo: "/assets/css3-original.svg" },
    { name: "Python", logo: "/assets/python-original.svg" },
    { name: "React.js", logo: "/assets/react-original.svg" },
  ];

  return (
    <section id="Skills">
      <div className="bg-black w-full h-auto text-white px-15 py-20">
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
