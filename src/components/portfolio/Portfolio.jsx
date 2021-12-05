import "./portfolio.scss";
import PortfolioList from "../porfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  gamePortfolio,
  designPortfolio,
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
      title: "Web App",
    },
    {
      id: "game",
      title: "Game Development",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "uni",
      title: "Uni Work",
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
      case "design":
        setData(designPortfolio);
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
      <h1>Portfolio</h1>
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
      <div className="container">
        {data.map((d) => (
          <a target="_blank" href={d.link} rel="noreferrer">
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
