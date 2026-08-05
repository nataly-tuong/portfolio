import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
