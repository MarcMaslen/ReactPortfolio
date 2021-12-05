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
      desc: "Here is my web Design Projects, these have been made using HTML, CSS, JavaScript and ReactJS. ",
      img: "https://onestopmedia.com.au/wp-content/uploads/2019/10/OSM-dev-top-updated-img.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Game Development",
      desc: "These are my game development projects I have made using Unity, Java and Blender",
      img: "https://blog.grosvenorcasinos.com/wp-content/uploads/2020/03/cross-platform-gaming-illustration.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "University Projects",
      desc: "Projects I have made through out my degree, varying from Cyber Security to Software Engineering.",
      img: "https://insights.dice.com/wp-content/uploads/2018/05/Developer-Interview-Homework-Dice.jpg",
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
                          My Projects - Web Design, Game Developement and Uni
                          Projects!
                        </h1>
                        <h2>
                          Web Design -
                          <span>
                            Here is my Web design and development project. I use
                            a vaiety of langauages such as HTML, CSS, PHP,
                            JavaScript, ReactJS.
                          </span>
                        </h2>
                        <h2>
                          Game Development -
                           <span>
                            developing games has taught me how to use Unity, Blender,
                            Java and much more.
                          </span>
                        </h2>
                        <h2>
                          Uni Projects -
                          <span>
                            On my GitHub you can also find all my projects I did while at University! Ranging from using hueristic algorithms to solve problems
                            to storing ID's in a database made with its own GUI!
                          </span>
                        </h2>
                        <p></p>
                        <Button />
                      </div>
                    </div>
                    <div className="right">
                      <img
                        src="https://insights.dice.com/wp-content/uploads/2018/05/Developer-Interview-Homework-Dice.jpg"
                        alt=""
                      />
                      <img
                        src="https://blog.grosvenorcasinos.com/wp-content/uploads/2020/03/cross-platform-gaming-illustration.jpg"
                        alt=""
                      />
                      <img
                        src="https://onestopmedia.com.au/wp-content/uploads/2019/10/OSM-dev-top-updated-img.png"
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
