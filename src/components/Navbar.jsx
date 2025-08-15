import { useState, useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    document.title = "Nataly's Portfolio";
  }, []);
  const [selected, setSelected] = useState("Home");
  const links = ["Home", "Skills", "Projects", "About", "Contact"];

  return (
    <navbar>
      <div
        className="fixed top-5 left-1/2 -translate-x-1/2 
            flex space-x-5 z-67
                    text-white bg-black/50 px-3 py-2 
                    border border-white/30 rounded-4xl"
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={`px-3 py-1 rounded-4xl text-center ${
              selected === link ? "bg-[#7E7E7E]" : ""
            }`}
            onClick={() => setSelected(link)}
          >
            {link}
          </a>
        ))}
      </div>
    </navbar>
  );
}
