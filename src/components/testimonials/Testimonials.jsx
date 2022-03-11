import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mark Abbs",
      title: "Awin - UK Integration Manager",
      img: "assets/Mark.jpg",
      icon: "assets/linkedin.png",
      desc: "Marc was an amazing asset to the UK integration team. He started as an intern, working with Access client's for" 
      + " 4 months. \nDuring this time he had worked through a good amount of access clients, catching on quick and made a guide for the Access process, allowing other "
      + "new interns to also use this to learn from.",
    },
    {
      id: 2,
      name: "Bryson C.Y",
      title: "Global Integration Assistant at Awin Global",
      img: "assets/bryson.jpg",
      icon: "assets/linkedin.png",
      desc: "Marc and I started working together at Awin during the start of Summer 2021. We get along really quick and well over the first few months and I had the pleasure to work with him more closely when we moved to the Global Team. Marc is a quick learner and yet one of the most hardworking person I've worked with while being able to handle challenges during the busier periods. He is very responsive in group discussions and always finds ways to improves current methods. Marc has shown a great interest in the field towards Web Development and I have no doubt in his skills.",
      featured: true
    },
    {
      id: 3,
      name: "Jackson Correa",
      title: "Awin - Current Integration Manager",
      img: "assets/jackson.jpg",
      icon: "assets/linkedin.png",
      desc: "He has done an amazing job switching over to handling European clients. He had also taken on more responsability such as working in a team of two to deal with all European Access" +
      " clients and doing Account Management tasks.",
    },
    
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured": "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
