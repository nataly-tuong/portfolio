import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
