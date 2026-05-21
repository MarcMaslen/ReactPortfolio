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
      strings: ["DevOps Engineer", "Data Platform Engineer", "Maia Foundation Specialist", "Cloud Delivery Specialist"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="heroContent">
        <div className="copy">
          <p className="eyebrow">London Area, United Kingdom</p>
          <h1>Marc Maslen</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <p className="summary">
            DevOps-focused data consultant with 3+ years across AWS, Terraform,
            CI/CD, cloud automation, Matillion, Snowflake, and production support.
            I build reliable data platforms, automate delivery workflows, and improve
            cloud environments for scalability, observability, and long-term maintainability.
          </p>
          <div className="actions">
            <a href="#portfolio">View Projects</a>
            <a href="https://www.linkedin.com/in/marc-maslen-489b48189/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/MarcMaslen" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="stats" aria-label="Professional highlights">
            <div>
              <strong>Data Platforms</strong>
              <span>Matillion, Snowflake and ETL delivery</span>
            </div>
            <div>
              <strong>AWS + IaC</strong>
              <span>Terraform, Lambda and CI/CD</span>
            </div>
            <div>
              <strong>Top 5%</strong>
              <span>First Class BSc Computer Science</span>
            </div>
          </div>
        </div>
        <div className="portrait">
          <img src="assets/me3.jpeg" alt="Marc Maslen" />
        </div>
      </div>
    </div>
  );
}
