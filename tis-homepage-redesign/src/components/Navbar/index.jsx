import { Menu } from "lucide-react"
import "./index.css"

const menuItems = [
  "ABOUT TIS",
  "ACADEMICS",
  "BOARDING LIFE",
  "BEYOND ACADEMICS",
  "EVENTS",
  "ADMISSION",
  "MANDATORY DISCLOSURE",
  "ALUMNI NETWORK",
  "QUICK LINKS",
]

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <div className="top-bar">
        <p>ADMISSIONS HELPLINE NO. +91-9837983791</p>

        <a href="#admissions" className="enquire-button">
          Enquire Now
        </a>
      </div>

      <nav className="main-navbar">
        <a href="/" className="navbar-logo">
          <img
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
          />
        </a>

        <div className="desktop-navigation">
          {menuItems.map((item) => (
            <a href="/" key={item}>
              {item}
            </a>
          ))}
        </div>

        <button className="menu-button" aria-label="Open menu">
          <Menu size={34} strokeWidth={1.8} />
        </button>
      </nav>
    </header>
  )
}

export default Navbar