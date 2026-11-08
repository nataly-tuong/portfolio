import Navbar from './components/Navbar';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
export default function App(){return <><a className="skip-link" href="#Projects">Skip to projects</a><Navbar/><main><Home/><Projects/><Skills/><Contact/></main><Footer/></>}
