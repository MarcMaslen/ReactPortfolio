import Topbar from "../topbar/Topbar";
import Menu from "../menu/Menu";
import Intro from "../intro/Intro";
import Work from "../work/Work";
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
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
