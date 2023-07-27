import React from 'react';
import './aboutme.scss';

export default function aboutme() {
    return (
      <div className="about" id="about">
          <h1>Introduction.</h1>
          <div className="introduction">
            <div className='about-content'>
              <p><span>Welcome to my Portfolio!</span> <br/><br/> Ever since building my first computer, I have been fascinated with everything IT-related such as hardware, software, and the development of everything inbetween! My main interests are Cyber Security, Data Analytics and Software Engineering.<br></br><br/>
                I attended The University of Essex and obtained a 1st Class Honours in BSc Computer Science, graduated in 2023. During my time at University, I accomplished so much and learnt even more such as Cyber Security, Networking, Software Development, Databases, Programming in multiple languages, and much more! I look forward to developing my skills and knowledge even more in the future. <br /><br />
                While finishing University I started full-time work at Awin as a Global Integration Analyst where I continue to improve my skills today. My current goals are to learn AWS, MERN stack and improve softskills.</p>
            </div>
            <div className='middle'></div>
            <div className='about-content1'>
              <p><span>Skills</span><br/><br/> · Languages - HTML, CSS, SCSS, Javascript, C#, Java, Python, SQL, PHP <br/><br/>· Frameworks - React.js, Node.js, Express.js, Tailwind, Bootstrap, Laravel, TypeScript
              <br/><br/>· Operating Systems - Windows 7-11 MacOS, Linux<br/><br/>· Tools - GitHub, Jira, Salesforce, Outlook, Scrum, Kanban, Agile, Asana, WordPress, Google Tag Manager, Google Analytics, Visual Studio, Visual Studio Code, IntelliJ, Apache, Unity, Blender, Shopify, Slack, Virtual machines, Remote desktop, MongoDB, Firebase and more
              <br/><br/>· Soft Skills - Time management, customer service, problem solving, team work, communication, leadership, adaptability, organization, creativity, and more
              <br/><br/>· Proudest Achievements - Blue Zero Web Designs, Completing my Degree with First Class Honours, Continuing to better myself everyday! 
              <br/><br/><a href="./MarcMaslenCV.docx" download>Download CV</a></p>
            </div>
          </div>
      </div>
    );
  }