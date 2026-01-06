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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setSelected(link);
    setIsMenuOpen(false);
    const section = document.getElementById(link);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  if (isMobile) {
    return (
      <div className="fixed top-5 right-5 z-90">
        <button
          className="text-white bg-black backdrop-blur-md border border-red-500 rounded-full p-3 w-12 h-12 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        <div
          className={`absolute top-16 right-0 bg-black backdrop-blur-md border border-red-500 rounded-2xl p-4 min-w-40 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <button
              key={link}
              className={`block w-full text-left px-4 py-3 rounded-xl text-white font-semibold tracking-tighter transition-colors ${
                selected === link ? "bg-[#7E7E7E]" : "hover:bg-white/10"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2
                  flex space-x-5 z-50
                  text-white tracking-tighter bg-black px-3 py-5 w-full
                  justify-center font-semibold
                  backdrop-blur-md"
    >
      {links.map((link) => (
        <button
          key={link}
          className={`px-6 py-1 rounded-4xl text-center transition-colors ${
            selected === link
              ? "border-b border-2 border-red-500"
              : "hover:bg-white/10"
          }`}
          onClick={() => handleLinkClick(link)}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
