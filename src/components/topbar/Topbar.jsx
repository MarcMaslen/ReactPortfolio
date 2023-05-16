import "./topbar.scss";
import { Person, Mail, Twitter, LinkedIn, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Marc Maslen.
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+447984633898</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>marcmaslen123@gmail.com</span>
          </div>
          <div className="itemcontainer">
           <a href="https://twitter.com/Swiftyair1" target="_blank">
              <Twitter className='icon'/>
              <span>@Swiftyair1</span>
            </a>
          </div>
          <div className="itemcontainer">
            <a href="https://www.linkedin.com/in/marc-maslen-489b48189/" target="_blank">
              <LinkedIn className='icon' />
              <span>Marc Maslen</span>
            </a>
          </div>
          <div className="itemcontainer">
            <a href="https://github.com/MarcMaslen" target="_blank">
              <GitHub className='icon' />
              <span>Marc Maslen</span>
            </a>  
          </div>
          <div className="itemcontainer">
          <a href="./MarcMaslenCV.docx" download>
              <span>Download CV</span>
            </a>  
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
