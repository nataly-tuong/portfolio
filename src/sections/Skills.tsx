import { skillSections } from "../data/skills";
export default function Skills() {
  return (
    <section id="Skills" className="section skills">
      <div className="section-heading">
        <p className="eyebrow">
          <span className="accent">02</span> / THE TOOLKIT
        </p>
        <h2>Built on curiosity.</h2>
        <p>The languages, frameworks, and tools</p>
      </div>
      <div className="skills-grid">
        {skillSections.map((section, i) => (
          <div className="skill-column" key={section.title}>
            <span className="skill-index">0{i + 1}</span>
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
