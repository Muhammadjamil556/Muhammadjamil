import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useRef } from "react";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <NavBar />
      <Banner scrollToContact={scrollToContact} />
      <Skills />
      <Projects />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
