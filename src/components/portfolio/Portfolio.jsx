import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  workExperiencePortfolio,
  softwarePortfolio,
  hardwarePortfolio,
  uiPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "work-experience",
      title: "Work Experience",
    },
    {
      id: "software",
      title: "Software",
    },
    {
      id: "hardware",
      title: "Hardware",
    },
    {
      id: "ui",
      title: "UI/UX",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "work-experience":
        setData(workExperiencePortfolio);
        break;
      case "software":
        setData(softwarePortfolio);
        break;
      case "hardware":
        setData(hardwarePortfolio);
        break;
      case "ui":
        setData(uiPortfolio);
        break;
      default:
        setData(workExperiencePortfolio);
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
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
