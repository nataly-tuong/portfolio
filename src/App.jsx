import { useState, useEffect } from "react";
import "./App.css";

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
           bg-[url('/Texturelabs_LensFX_130M.jpg')] bg-cover bg-center
           px-20 py-40 text-white text-center"
          >
            <h1
              class="text-4xl font-bold bg-gradient-to-r
           from-red-600 to-cyan-600 inline-block 
           text-transparent bg-clip-text"
            >
              Nataly Tuong
            </h1>
            <h2 class="font-bold">
              aspiring software engineer & web developer
            </h2>
            <p>
              ✧ദ്ദി( ˶^ᗜ^˶ ) Hi! Hello, I love exploring what tech has to offer.
              Specifically, I'm interested in creating works with thoughtful
              architecture and intent. I'm deeply committed to innovation and
              continuous learning.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
