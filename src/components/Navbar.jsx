import { useState, useEffect } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const links = ["Home", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let link of links) {
        const section = document.getElementById(link);
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setSelected(link);
          break;
        }
      }
    };
    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setSelected(link);
    setIsMenuOpen(false);
    const section = document.getElementById(link);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (isMobile) {
    return (
      <>
        <div className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 py-5 font-noto font-light tracking-[0.3em] uppercase text-[0.65rem] text-white/70">
          <span className="text-secondaryAccent/90">Nataly Tuong</span>
          <button
            className="text-white/80 border border-white/15 rounded-full p-3 w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1">
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
        <div
          className={`fixed top-16 right-5 z-[100] bg-abyss/90 border border-white/15 p-4 min-w-44 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <button
              key={link}
              className={`block w-full text-left px-4 py-3 font-noto font-light tracking-[0.2em] uppercase text-xs transition-colors ${
                selected === link
                  ? "text-mainAccent"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              ( {link} )
            </button>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-[100] px-8 lg:px-12 py-8 font-noto pointer-events-none">
        <span
          className="font-light tracking-[0.35em] uppercase text-xs text-secondaryAccent/80 select-none"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)" }}
        >
          Nataly Tuong
        </span>
      </div>

      <div className="fixed top-0 right-0 z-[100] px-8 lg:px-12 py-8 font-noto pointer-events-none">
        <span
          className="font-light tracking-[0.35em] uppercase text-[0.65rem] text-white/30 select-none"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)" }}
        >
          ( SWE )
        </span>
      </div>

      <nav className="fixed bottom-0 left-0 z-[100] px-8 lg:px-12 py-8 font-noto grid grid-cols-2 gap-x-6 gap-y-2">
        {links.map((link) => (
          <button
            key={link}
            className={`text-left font-light tracking-[0.3em] uppercase text-xs transition-colors duration-300 ${
              selected === link
                ? "text-mainAccent text-glow-accent"
                : "text-white/45 hover:text-white/80"
            }`}
            style={
              selected === link
                ? undefined
                : { textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)" }
            }
            onClick={() => handleLinkClick(link)}
          >
            <span className="text-mainAccent/50">( </span>
            {link}
            <span className="text-mainAccent/50"> )</span>
          </button>
        ))}
      </nav>
    </>
  );
}
