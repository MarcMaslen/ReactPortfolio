import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Richard Talbot",
      title: "University of Essex - Information Technology Manager",
      img: "assets/richard.jpeg",
      href: "https://www.linkedin.com/in/rltalbot/",
      icon: "assets/linkedin.png",
      desc: "Marc was an amazing asset to the UK integration team. He started as an intern, working with Access client's for" 
      + " 4 months. \nDuring this time he had worked through a good amount of access clients, catching on quick and made a guide for the Access process, allowing other "
      + "new interns to also use this to learn from.",
    },
    {
      id: 2,
      name: "Jackson Correa",
      title: "Awin - Integration Manager",
      img: "assets/jackson.jpg",
      icon: "assets/linkedin.png",
      href: "https://www.linkedin.com/in/jackson-correa-949755bb/",
      desc: "Marc was an amazing asset to the team and he has done an amazing job handling all of his clients, while also helping handling much more during our transition period. He had also taken on more responsibility such as working in a team of two to deal with all European Access" +
      " clients and doing Account Management tasks. He is a valuable asset to the team who did a fantastic job during his placement here.",
      featured: true
    },
    {
      id: 3,
      name: "Bryson C.Y",
      title: "Worked in the same team at Awin",
      img: "assets/bryson.jpg",
      icon: "assets/linkedin.png",
      href: "https://www.linkedin.com/in/bryson-cy/",
      desc: "Marc and I started working together at Awin during the start of Summer 2021. We get along really quick and well over the first few months and I had the pleasure to work with him more closely when we moved to the Global Team. Marc is a quick learner and yet one of the most hardworking person I've worked with while being able to handle challenges during the busier periods. He is very responsive in group discussions and always finds ways to improves current methods. Marc has shown a great interest in the field towards Web Development and I have no doubt in his skills.",
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
              <a 
              href={d.href}
                target="_blank"
                rel="noreferrer">
              <img
                className="user"
                src={d.img}
                alt=""
              /></a>
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
