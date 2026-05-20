import "./topbar.scss";
import { Mail, LinkedIn, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Marc Maslen.
          </a>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>marcmaslen123@gmail.com</span>
          </div>
          <div className="itemcontainer">
            <a href="https://www.linkedin.com/in/marc-maslen-489b48189/" target="_blank" rel="noreferrer">
              <LinkedIn className='icon' />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="itemcontainer">
            <a href="https://github.com/MarcMaslen" target="_blank" rel="noreferrer">
              <GitHub className='icon' />
              <span>GitHub</span>
            </a>  
          </div>
        </div>

        <div className="right">
          <button
            className="hamburger"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
