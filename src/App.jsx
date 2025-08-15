import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
      </main>
    </>
  );
}

export default App;
