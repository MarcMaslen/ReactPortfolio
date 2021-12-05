import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Marc Abbs",
      title: "Awin - Integration Manager",
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQFwsxV-FtBVlg/profile-displayphoto-shrink_200_200/0/1573162956789?e=1643846400&v=beta&t=WQGkSjpQ3kIdifNthfTBLlh1v1-IX5B_FfpMiGAVo80",
      icon: "assets/linkedin.png",
      desc: "Marc was an amazing asset to the UK integration team. He started as an intern, working with Access client's for" 
      + " 4 months. \nDuring this time he had worked through a good amount of access clients, catching on quick and made a guide for the Access process, allowing other "
      + "new interns to also use this to learn from.",
    },
    {
      id: 2,
      name: "Jackson Correa",
      title: "Awin - Current Integration Manager",
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQHRNjm29vedDQ/profile-displayphoto-shrink_100_100/0/1555426576447?e=1643846400&v=beta&t=uBbV8wPLs8YQR37PfmNLGbbAJPa3Alrx6j-j0tvNDsY",
      icon: "assets/linkedin.png",
      desc: "He has done an amazing job switching over to handling European clients. He had also taken on more responsability such as working in a team of two to deal with all European Access" +
      " clients and doing Account Management tasks",
      featured: true,
    },
    {
      id: 3,
      name: "Bryson C.Y",
      title: "Global Integration Assistant at Awin Global",
      img: "https://media-exp1.licdn.com/dms/image/C5603AQG179PHMtqvyQ/profile-displayphoto-shrink_200_200/0/1604540839348?e=1643846400&v=beta&t=_mku0VVZnbqwr5B87ozCMdGVLxbNZtmZ9E1Vpup1EtY",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
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
