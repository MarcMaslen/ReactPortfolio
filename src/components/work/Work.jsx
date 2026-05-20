import "./work.scss";

export default function Work() {
  const data = [
    {
      id: "1",
      role: "Data Consultant with DevOps Responsibilities",
      company: "Snap Analytics | July 2023 - Present",
      desc: "Developing Matillion and REST API ETL pipelines, leading Matillion ETL to Data Productivity Cloud migration work with Maia Foundation, building Terraform AWS infrastructure, automating Lambda operations, improving CI/CD, and adding CloudWatch, Elasticsearch and New Relic observability.",
      tags: ["Maia Foundation", "Data Productivity Cloud", "Matillion ETL", "AWS", "Terraform", "Snowflake"],
    },
    {
      id: "2",
      role: "Global Integration Analyst",
      company: "Awin London | March 2023 - July 2023",
      desc: "Integrated SME and enterprise clients into Awin's affiliate tracking platform, configured deduplication and cross-site tracking, resolved data discrepancies, and built SQL-based performance reports for client optimisation.",
      tags: ["SQL", "API integrations", "Data ingestion", "Client delivery"],
    },
    {
      id: "3",
      role: "1st Line Support Technician",
      company: "University of Essex | September 2022 - March 2023",
      desc: "Supported Windows, Linux and MacOS environments across phone, live chat and Jira queues, reduced backlog by 60% through better Confluence documentation, and performed technical support and security checks.",
      tags: ["Jira", "Confluence", "Linux", "Technical support"],
    },
    {
      id: "4",
      role: "Global Integration Assistant",
      company: "Awin London | June 2021 - September 2022",
      desc: "Managed onboarding workflows for 40+ clients simultaneously, supported a specialist team onboarding 50+ affiliates monthly, and trained across tracking logic, API integrations and technical support.",
      tags: ["Client onboarding", "Tracking logic", "APIs", "Process improvement"],
    },
  ];

  return (
    <div className="work" id="experience">
      <div className="sectionHeader">
        <p>Experience</p>
        <h1>Built across support, development, and delivery.</h1>
      </div>
      <div className="timeline">
        {data.map((d) => (
          <article className="timelineItem" key={d.id}>
            <span>{String(d.id).padStart(2, "0")}</span>
            <div>
              <h2>{d.role}</h2>
              <h3>{d.company}</h3>
              <p>{d.desc}</p>
              <div className="tags">
                {d.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
