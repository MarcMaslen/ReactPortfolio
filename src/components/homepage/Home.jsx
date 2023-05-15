import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import Intro from "../intro/Intro";
import About from "../aboutme/Aboutme";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";
import { useState } from "react";
import './home.scss';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
