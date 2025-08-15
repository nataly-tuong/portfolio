import { useState, useEffect } from "react";
import "./App.css";
import ShinyText from "./components/ShinyText/ShinyText.jsx";

function App() {
  useEffect(() => {
    document.title = "Nataly's Portfolio";
  }, []);

  return (
    <>
      <main>
        <section id="about">
          <div
            class="bg-black
           bg-[url('/Texturelabs_LensFX_130M.jpg')] bg-cover
           px-25 py-40 text-white text-center
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
           from-mainAccent to-secondaryAccent inline-block p-1 
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
            class="absolute top-10
           text-white"
          >
            meow
          </div>
        </navbar>
      </main>
    </>
  );
}

export default App;
