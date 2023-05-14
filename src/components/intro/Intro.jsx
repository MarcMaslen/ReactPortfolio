import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay:  1500,
      backSpeed: 60,
      strings: ["Computer Science Student", "Software Developer", "Web Designer", "Blogger"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me3.jpeg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Marc Maslen</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        
      </div>
      
    </div>
  );
}
