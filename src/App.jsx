import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectCountries from "./pages/ProjectCountries";
import ProjectGame from "./pages/ProjectGame";
import ProjectPort from "./pages/ProjectPort";

function App() {
  return (
    <BrowserRouter basename="/portfolio-website/">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectgame" element={<ProjectGame />} />
          <Route path="/projectcountries" element={<ProjectCountries />} />
          <Route path="/projectport" element={<ProjectPort />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
