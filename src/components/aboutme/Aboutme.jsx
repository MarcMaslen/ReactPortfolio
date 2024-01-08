import React from 'react';
import './aboutme.scss';

export default function aboutme() {
    return (
      <div className="about" id="about">
          <h1>About Me.</h1>
          <div className="introduction">
            <div className='about-content'>
              <p><span>Who is this guy?</span> <br/><br/> My name is Marc. I am currently a Technical Consultant and Web Developer based near London.<br></br><br/>
                I attended The University of Essex and obtained a 1st Class Honours in BSc Computer Science with Placement year. 
                <br/><br/>I enjoy solving problems and have interests in areas such as Cyber Security, Networking, Software Development, Databases, Programming and much more! I look forward to developing my skills and knowledge even more in the future. <br /><br />
                 I have experience working as an Integration Analyst, Software Developer and working on the IT Help desk at Uni. As a Technical Consultant my work is split between development and support. </p>
            </div>
            <div className='middle'></div>
            <div className='about-content1'>
              <p><span>What can I do?</span><br/><br/> At heart I am a developer. For front-end development I usually work with Javascript either standalone or using popular frameworks like ReactJS or VueJS. I also make the websites look better with SCSS, CSS, whatever is needed including bootstrap. 
              <br/><br/> For back-end I also work with Javascript (NodeJS, Express, MongoDB, AWS etc). Although whenever the project requires PHP I can do that too usually with wordpress or Laravel. 
              <br/><br/> In my day to day role as a Technical Consultant I use Matillion, Snowflake and AWS to manage data ingestion, transformation and orchestration. This role includes working 40% support and 60% development including keeping these instances updated, working and improving workflows for better performance. 
              {/* <br/><br/> · Languages - HTML, CSS, SCSS, Javascript, C#, Java, Python, SQL, PHP <br/><br/>· Frameworks - React.js, Node.js, Express.js, Tailwind, Bootstrap, Laravel, TypeScript
              <br/><br/>· Tools - GitHub, Jira, Salesforce, Outlook, Scrum, Kanban, Agile, Asana, WordPress, Google Tag Manager, Google Analytics, Visual Studio, Visual Studio Code, IntelliJ, Apache, Unity, Blender, Shopify, Slack, Virtual machines, Remote desktop, MongoDB, Firebase and more
              <br/><br/>· Soft Skills - Time management, customer service, problem solving, team work, communication, leadership, adaptability, organization, creativity, and more
              <br/><br/>· Proudest Achievements - Blue Zero Web Designs, Completing my Degree with First Class Honours, Continuing to better myself everyday!  */}
              </p>
            </div>
          </div>
      </div>
    );
  }