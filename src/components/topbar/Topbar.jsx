import "./topbar.scss";
import { Person, Mail, Twitter, LinkedIn, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio.
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
            <Twitter className='icon'/>
            <span>@Swiftyair1</span>
          </div>
          <div className="itemcontainer">
            <LinkedIn className='icon' />
            <span>Marc Maslen</span>
          </div>
          <div className="itemcontainer">
            <GitHub className='icon' />
            <span>Marc Maslen</span>
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
