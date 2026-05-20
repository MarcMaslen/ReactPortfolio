import "./portfolio.scss";
import PortfolioList from "../porfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  devopsPortfolio,
  dataPortfolio,
  developmentPortfolio,
  otherPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "devops",
      title: "Cloud & DevOps",
    },
    {
      id: "data",
      title: "Data Engineering",
    },
    {
      id: "development",
      title: "Development Foundations",
    },
    {
      id: "other",
      title: "Other Work",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "devops":
        setData(devopsPortfolio);
        break;
      case "data":
        setData(dataPortfolio);
        break;
      case "development":
        setData(developmentPortfolio);
        break;
      case "other":
        setData(otherPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


  return (
    <div className="portfolio" id="portfolio">
      <div className="sectionHeader">
        <p>Selected work</p>
        <h1>Projects and proof points.</h1>
      </div>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <p className="portfolioIntro">
        A curated set of work aligned to my current direction. Professional platform
        work is represented as capability-focused case studies where client details
        need to stay private.
        <a href="https://github.com/MarcMaslen" target="_blank" rel="noreferrer"> View GitHub</a>
      </p>
      <div className="container">
        {data.map((d) => (
          <a target="_blank" href={d.link} rel="noreferrer" key={d.id}>
            <div className="item">
              <div className={`projectVisual ${d.visual || "default"}`} aria-hidden="true">
                <span>{d.type}</span>
              </div>
              <div className="projectContent">
                <span>{d.type}</span>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
