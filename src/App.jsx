import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Skills />
      </main>
    </>
  );
}

export default App;
