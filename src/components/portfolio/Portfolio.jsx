import "./portfolio.scss";
import PortfolioList from "../porfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
  softwarePortfolio,
  uniPortfolio,
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
      id: "web",
      title: "Web Development",
    },
    {
      id: "game",
      title: "Game Development",
    },
    {
      id: "software",
      title: "Software Development",
    },
    {
      id: "uni",
      title: "University Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "game":
        setData(gamePortfolio);
        break;
      case "software":
        setData(softwarePortfolio);
        break;
      case "uni":
        setData(uniPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio.</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <h3>Click the images to see the Github for each project!<br/> <a href="https://github.com/MarcMaslen" target="_blank">Click Here for my Github Profile</a></h3>
      <div className="container">
        {data.map((d) => (
          <a target="_blank" href={d.link} rel="noreferrer">
          <div className="item">
            <img src={d.img} alt="" />
          </div>
          <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
