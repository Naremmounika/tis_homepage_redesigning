import { useEffect, useRef, useState } from "react"
import "./index.css"

const Intro = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`intro-section ${isVisible ? "intro-visible" : ""}`}
    >
      {/* FIRST SECTION */}

      <div className="intro-container intro-first">
        <div className="intro-content">
          <h2 className="intro-quote">
            “We feel supported in what we do and nudged further to do more”
          </h2>

          <p className="intro-description">
            At Tulas, we believe in bringing out the best in every
            student—whether it’s academics, music, art, or drama. With the
            right support and inspiration, creativity finds its way. For us,
            school isn’t just about lessons, it’s about endless opportunities
            waiting to be explored.
          </p>
        </div>

        <div className="intro-visual">
          <img
            src="https://tis.edu.in/_next/static/media/ladyInPink.c358aa8f.png"
            alt="Tulas International School student"
          />
        </div>
      </div>

      {/* SECOND SECTION */}

      <div className="intro-container intro-second">
        <div className="intro-second-visual">
          <img
            src="https://tis.edu.in/_next/static/media/manInBlue.46316cbf.png"
            alt="Tulas International School student"
          />
        </div>

        <div className="intro-content intro-second-content">
          <h2 className="intro-quote">
            “Tulas helped me thrive and become the best version of myself”
          </h2>

          <p className="intro-description">
            When you choose a school that chooses you, it becomes more than
            just a place to learn—it becomes a place to belong, grow, and
            shine. At Tulas International School, we see the potential in
            every student and help them bring it to life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro