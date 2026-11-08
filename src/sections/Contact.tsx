import Arrow from "../components/Arrow";
export default function Contact() {
  return (
    <section id="Contact" className="section contact">
      <p className="eyebrow">
        <span className="accent">03</span> / SAY HELLO
      </p>
      <h2>
        Something in mind?
        <br />
        Let’s make it happen<span className="accent">.</span>
      </h2>
      <a className="button primary" href="mailto:ntuong1117@gmail.com">
        ntuong1117@gmail.com <Arrow />
      </a>
      <div className="contact-links">
        <a
          href="https://github.com/nataly-tuong"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <Arrow />
        </a>
        <a
          href="https://www.linkedin.com/in/nataly-tuong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Arrow />
        </a>
      </div>
    </section>
  );
}
