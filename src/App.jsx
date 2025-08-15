import { useState, useEffect } from "react";
import "./App.css";
import ShinyText from "./components/ShinyText/ShinyText.jsx";

function App() {
  useEffect(() => {
    document.title = "Nataly's Portfolio";
  }, []);
  const [selected, setSelected] = useState("Home");
  const links = ["Home", "Skills", "Projects", "About", "Contact"];

  return (
    <>
      <main>
        <section id="Home">
          <div
            class="bg-black
           bg-[url('/Texturelabs_LensFX_130M.jpg')] bg-cover
           px-25 pb-40 pt-35 text-white text-center
           bg-[position:10%_center] relative"
          >
            <div
              class="absolute top-20 right-15
            bg-[url('Texturelabs_LensFX_242S.jpg')]
            bg-cover bg-center
            mix-blend-plus-lighter
            w-20 h-20 brightness-125
            animate-pulse"
            ></div>
            <div
              class="absolute top-90 left-60
            bg-[url('Texturelabs_LensFX_242S.jpg')]
            bg-cover bg-center
            mix-blend-plus-lighter
            w-10 h-10 brightness-200
            rotate-[20deg]
            animate-pulse"
            ></div>
            <div
              class="absolute top-85 left-35
            bg-[url('Texturelabs_LensFX_242S.jpg')]
            bg-cover bg-center
            mix-blend-plus-lighter
            w-25 h-25 brightness-80
            rotate-[5deg]
            animate-pulse"
            ></div>
            <h1
              class="text-5xl font-bold bg-gradient-to-r
           from-mainAccent to-secondaryAccent inline-block p-2 
           text-transparent bg-clip-text
           m-2"
            >
              Nataly Tuong
            </h1>
            <ShinyText
              text="aspiring software engineer & web developer"
              disabled={false}
              speed={2}
              className="custom-class font-bold mb-2"
            />
            <p>
              ✧ദ്ദി( ˶^ᗜ^˶ ) Hi! Hello, I love exploring what tech has to offer.
              Specifically, I'm interested in creating works with thoughtful
              architecture and intent. I'm deeply committed to innovation and
              continuous learning.
            </p>
          </div>
        </section>
        <navbar>
          <div
            className="fixed top-5 left-1/2 -translate-x-1/2 
            flex space-x-5
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
      </main>
    </>
  );
}

export default App;
