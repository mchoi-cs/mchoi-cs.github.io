import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
// import { Extracurriculars } from "./components/Extracurriculars";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      {/* <Extracurriculars /> */}
      <Gallery />
    </div>
  );
}

export default App;
