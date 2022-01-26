import "./work.scss";
import { useState} from "react";
import Popup from "./WorkPopUp";
import Button from "../button/Button";

export default function Work() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [buttonPopup, setButtonPopup] = useState(false);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "This website was built by me using ReactJS, Check out my GitHub to see more WebDev projects made using HTML, CSS, JavaScript and ReactJS and more! ",
      img: "assets/working.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Software Development",
      desc: "Check out my GitHub below to see some of my Software Development projects in a variety of languages such as Java, C#, Python ect.",
      img: "assets/gaming.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "University Projects",
      desc: "Check out my GitHub below to see my University Projects I created. Some of the subjects were Cyber Security, Algorithms, Databases ect",
      img: "assets/webdev.PNG",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };


  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={d.icon} alt=""></img>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <button onClick={() => setButtonPopup(true)}>Projects</button>

                  <Popup
                    open={buttonPopup}
                    onClose={() => setButtonPopup(false)}
                    id={"1"}
                  >
                    <div className="left">
                      <div className="leftcontainer">
                        <h1>
                          My Projects - Web Design, Software Development and Uni
                          Projects!
                        </h1>
                        <h2>
                          Web Design -
                          <span>
                            On my GitHub you can find my Web design and development projects. I use
                            a vaiety of langauages such as HTML, CSS, PHP,
                            JavaScript, ReactJS.
                          </span>
                        </h2>
                        <h2>
                          Software Development -
                           <span>
                            Developing software has taught me how to use Java, Python,
                            C# and much more. Check them out on my GitHub!
                          </span>
                        </h2>
                        <h2>
                          Uni Projects -
                          <span>
                            On my GitHub you can also find all my projects I did while at University! Ranging from using hueristic algorithms to solve problems with
                            and storing ID's in a database made with its own GUI! Also so much more!
                          </span>
                        </h2>
                        <p></p>
                        <Button />
                      </div>
                    </div>
                    <div className="right">
                      <img
                        src="assets/working.jpg"
                        alt=""
                      />
                      <img
                        src="assets/gaming.jpg"
                        alt=""
                      />
                      <img
                        src="assets/webdev.PNG"
                        alt=""
                      />
                    </div>
                  </Popup>
                </div>
              </div>

              <div className="right">
                <img src={d.img} alt="" />
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
