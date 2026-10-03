import "./index.css"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-map">
          <iframe
            title="Tulas International School Location"
            src="https://www.google.com/maps?q=Tulas%20International%20School%20Dhoolkot%20Dehradun&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="footer-school">
          <img
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
          />

          <h2>Tulas International School</h2>

          <p>
            Dhoolkot, P.O – Selaqui,
            <br />
            Chakrata Road,
            <br />
            Dehradun - 248011,
            <br />
            Uttarakhand
          </p>

          <a href="tel:+919837983791">+91-9837983791</a>

          <a href="mailto:info@tis.edu.in">info@tis.edu.in</a>
        </div>

        <div className="footer-links">
          <h3>FAQ</h3>

          <a href="/">About TIS</a>
          <a href="/">Academics</a>
          <a href="/">Boarding Life</a>
          <a href="/">Admission</a>
          <a href="/">Events</a>
          <a href="/">FAQ</a>
          <a href="/">Calendar</a>
          <a href="/">Brochure</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Tulas International School. All Rights
          Reserved.
        </p>

        <p>Designed with care for Tulas International School</p>
      </div>
    </footer>
  )
}

export default Footer