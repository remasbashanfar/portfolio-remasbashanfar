import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Python Tutor & Curriculum Planner",
      title: "ACM Teach LA @UCLA",
      img:
        "assets/acm.jpeg",
      icon: "",
      desc:
        "Taught Python, prepared lectures, and created curriculum for Emerson Middle School students every week",
    },
    {
      id: 2,
      name: "AI/ML Research Intern",
      title: "NC State",
      img:
        "assets/ncstate2.png",
      icon: "",
      desc:
        "Used Neural Network Methods & NLP to train a model of over 5,900 movies, creating an algorithm that clusters similar movies (creating movie recommendations) by Cosine Similarity",
      featured: true,
    },
    {
      id: 3,
      name: "Product Manager Intern",
      title: "20Formation Event Planning",
      img:
        "assets/20formation2.png",
      icon: "",
      desc:
        "Trained for 4 weeks with Procter & Gamble Specialists then Managed, Planned, and Organized three events, attracting 255 attendees and profiting over $10,000",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Work Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
              <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>

            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
