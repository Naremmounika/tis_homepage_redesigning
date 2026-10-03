import "./index.css"

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        {/* Left column */}
        <div className="hero-left">
          <img
            src="https://tis.edu.in/_next/static/media/Image%203.21dc9e69.webp"
            alt="Cricket"
          />

          <img
            src="https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp"
            alt="Swimming"
          />

          <img
            src="https://tis.edu.in/_next/static/media/pot.6f7c2ee3.webp"
            alt="Pottery"
          />
        </div>

        {/* Center */}
        <div className="hero-center">
          <h1>
            LET&apos; S DO <span>it</span>
            <br />
            <em>With Tulas</em>
            <div className="hero-underline" />
          </h1>

          
        </div>

        {/* Right column */}
        <div className="hero-right">
          <img
            src="https://tis.edu.in/_next/static/media/karate.4020fba5.webp"
            alt="Karate"
          />

          <img
            src="https://tis.edu.in/_next/static/media/Image%201.0a814859.webp"
            alt="Student activity"
          />

          <img
            src="https://tis.edu.in/_next/static/media/dance.88843edb.webp"
            alt="Dance"
          />
        </div>
      </div>

      {/* Content after hero */}
      <div className="hero-bottom">
        <p>
          Tulas International School was established in 2012 under the aegis of
          Rishabh Educational Trust to impart education through seamless
          opportunities.
        </p>
      </div>
    </section>
  )
}

export default Hero