import Arrow from "../components/Arrow";
import VideoBackground from "../components/VideoBackground";
export default function Home() {
  return (
    <section id="Home" className="hero">
      <VideoBackground />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow hero-intro">
          <span className="status-dot" /> LOS ANGELES, CA{" "}
          <span className="hero-slash">/</span> ASPIRING SOFTWARE ENGINEER
        </p>
        <h1 className="hero-name">
          Nataly Tuong<span className="accent">.</span>
        </h1>
        <p className="hero-line hero-tagline">Hi, I make cool things</p>
        <div className="hero-bottom hero-actions">
          <p>CS @ CSULA</p>
          <a className="button primary" href="#Projects">
            Explore my work <Arrow diagonal={false} />
          </a>
        </div>
      </div>
      <div className="hero-footnote hero-note">
        <span>I COULDNT THINK OF COOL WORDS TO PUT HERE.</span>
        <a href="#Projects">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
