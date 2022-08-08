import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "JiaK",
      desc:
        "During the pandemic, a group of friends and I wanted to help HomeBakers accelerate their business growth by creating a marketplace for Home Goods.",
      img:
        "./assets/jiak.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "High-Speed Electric Vertical Takeoff and Landing",
      desc:
        "For a design project targeted to solve the logistic issue in Norway, my team worked on an E-VTOL Drone that carries packages. ",
      img:
        "./assets/evtol.png",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "EngiNavigator",
      desc:
        "A friend and me wanted to help students in Engineering navigate their way through the campus. We created a simple web application to find the shortest route between two places.",
      img:
        "./assets/cp2106.png",
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
