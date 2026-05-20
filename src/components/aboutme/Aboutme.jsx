import React from 'react';
import './aboutme.scss';

export default function Aboutme() {
  const skillGroups = [
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Terraform", "CI/CD", "GitHub Actions", "Bitbucket Pipelines", "Docker", "GitOps"],
    },
    {
      title: "Data Platforms",
      skills: ["Matillion ETL", "Snowflake", "SQL", "REST APIs", "Data pipelines", "ETL optimisation"],
    },
    {
      title: "Operations & Tooling",
      skills: ["CloudWatch", "Elasticsearch", "New Relic", "Linux", "Jira", "Confluence", "Postman"],
    },
  ];

  const certifications = [
    "Matillion Associate Certification",
    "Matillion Data Productivity Cloud Certification",
    "SnowPro Core Certification",
    "AWS Certified Cloud Practitioner - in progress",
    "AWS Solutions Architect Associate - 2026 target",
  ];

  return (
    <div className="about" id="about">
      <div className="sectionHeader">
        <p>Professional snapshot</p>
        <h1>DevOps engineer with a developer's toolkit.</h1>
      </div>
      <div className="introduction">
        <div className="about-content">
          <h2>Current Focus</h2>
          <p>
            I am a Data Consultant at Snap Analytics with DevOps responsibilities,
            working across AWS infrastructure, Matillion and Snowflake delivery,
            production support, CI/CD workflows, and automation. I like roles where
            I can move between investigation, implementation, and making systems
            easier for other people to run.
          </p>
        </div>
        <div className="about-content1">
          <h2>Background</h2>
          <p>
            My foundation is a First Class BSc Computer Science degree with a placement
            year from the University of Essex, where I was awarded Dean's List of
            Excellence for finishing in the top 5% of my cohort. Since then I have
            built experience across integration analysis, IT support, technical
            consulting, cloud automation, and DevOps-focused data platform work.
          </p>
        </div>
      </div>
      <div className="skillsGrid">
        {skillGroups.map((group) => (
          <div className="skillCard" key={group.title}>
            <h2>{group.title}</h2>
            <div>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="certifications">
        <h2>Certifications</h2>
        <div>
          {certifications.map((certification) => (
            <span key={certification}>{certification}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
