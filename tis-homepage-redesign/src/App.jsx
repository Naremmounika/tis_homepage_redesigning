import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Sports from "./components/Sports"
import Rankings from "./components/Rankings"
import Media from "./components/Media"
import Awards from "./components/Awards"
import Testimonials from "./components/Testimonials"
import Collaborations from "./components/Collaborations"
import Footer from "./components/Footer"
import Admissions from "./components/Admissions"
import ScrollProgress from "./components/ScrollProgress"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Admissions />
        <Intro />
        <Sports />
        <Rankings />
        <Media />
        <Awards />
        <Testimonials />
        <Collaborations />
      </main>

      <Footer />
    </div>
  )
}

export default App