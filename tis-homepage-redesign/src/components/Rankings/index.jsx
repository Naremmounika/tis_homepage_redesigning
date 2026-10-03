import "./index.css"

const statistics = [
  {
    number: "22",
    title: "ACRE POLLUTION FREE CAMPUS",
    icon: "https://tis.edu.in/_next/static/media/campus.e67b1a0a.png",
  },
  {
    number: "16+",
    title: "OLYMPIC SPORTS",
    icon: "https://tis.edu.in/_next/static/media/sports.e695b690.png",
  },
  {
    number: "24*7",
    title: "MEDICAL ASSISTANCE",
    icon: "https://tis.edu.in/_next/static/media/medical.e87071fe.png",
  },
  {
    number: "6:1",
    title: "STUDENT TEACHER RATIO",
    icon: "https://tis.edu.in/_next/static/media/ratio.6ca07c6a.png",
  },
]

const Rankings = () => {
  return (
    <section className="school-story-section">
      <div className="school-story-container">
        <div className="school-story-image">
          <img
            src="https://tis.edu.in/_next/static/media/AtTIS.59351600.png"
            alt="Tulas International School student"
          />
        </div>

        <div className="school-story-content">
          <p className="school-story-label">
            At Tulas, we always ask,
          </p>

          <h2>
            “What’s the secret to making
            <br />
            school awesome?”
          </h2>

          <p className="school-story-description">
            The secret to making one&apos;s school experience truly
            unforgettable? It’s all about making learning feel like an
            adventure—where curiosity leads, creativity thrives, and every day
            brings something new to discover. When students are inspired, they
            don’t just learn—they grow, explore, and shape their own futures.
          </p>

          <p className="school-story-answer">
            There, we cracked it!
          </p>
        </div>
      </div>

      <div className="statistics-section">
        <div className="statistics-container">
          {statistics.map((stat) => (
            <div className="stat-item" key={stat.title}>
              <img
                className="stat-icon"
                src={stat.icon}
                alt=""
              />

              <div className="stat-number">{stat.number}</div>

              <p>{stat.title}</p>
            </div>
          ))}
        </div>
        <div className="rankings-section">
          <div className="rankings-heading">
            <img
              src="https://tis.edu.in/_next/static/media/ranking.157c5a68.png"
              alt="Our Rankings"
            />

            
         

          <div className="rankings-list">
            <article className="ranking-item">
              <div className="ranking-number">#1</div>

              <div className="ranking-content">
                <h3>In Dehradun</h3>
                <p>
                  Co-Educational Boarding School in Dehradun by Education Today
                </p>
              </div>
            </article>

            <article className="ranking-item">
              <div className="ranking-number">#2</div>

              <div className="ranking-content">
                <h3>In Uttarakhand</h3>
                <p>
                  Co-Educational Boarding School in North India by Education Today
                </p>
              </div>
            </article>

            <article className="ranking-item">
              <div className="ranking-number">#1</div>

              <div className="ranking-content">
                <h3>In North India</h3>
                <p>
                  Co-Educational Boarding School in North India by Outlook
                </p>
              </div>
            </article>

            <article className="ranking-item">
              <div className="ranking-number">#4</div>

              <div className="ranking-content">
                <h3>In India</h3>
                <p>
                  Co-Educational Boarding School in India by Education Today
                </p>
              </div>
            </article>
          </div>
        </div>
        </div>
      </div>


    </section>
  )
}

export default Rankings