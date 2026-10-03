import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./index.css"

const sports = [
  {
    name: "Archery",
    image:
      "https://tis.edu.in/_next/static/media/archery.7a805345.png",
  },
  {
    name: "Cycling",
    image:
      "https://tis.edu.in/_next/static/media/cycling.80dbb9b1.png",
  },
  {
    name: "Hockey",
    image:
      "https://tis.edu.in/_next/static/media/hockey.219fe552.png",
  },
  {
    name: "Swimming",
    image:
      "https://tis.edu.in/_next/static/media/swimming.d4285534.png",
  },
  {
    name: "Taekwondo",
    image:
      "https://tis.edu.in/_next/static/media/taekwando.86e26406.png",
  },
  {
    name: "Football",
    image:
      "https://tis.edu.in/_next/static/media/football.ca61e5d0.png",
  },
  {
    name: "Shooting Range",
    image:
      "https://tis.edu.in/_next/static/media/shooting.b0b11d74.png",
  },
  {
    name: "Horse Riding",
    image:
      "https://tis.edu.in/_next/static/media/horseRiding.8f259127.png",
  },
  {
    name: "Billiards",
    image:
      "https://tis.edu.in/_next/static/media/billiards-single.a1e831c6.png",
  },
  {
    name: "Squash",
    image:
      "https://tis.edu.in/_next/static/media/squash.ffa0360a.png",
  },
  {
    name: "Volleyball",
    image:
      "https://tis.edu.in/_next/static/media/volleyball.045be884.png",
  },
  {
    name: "Basketball",
    image:
      "https://tis.edu.in/_next/static/media/basketball.fa70909d.png",
  },
  {
    name: "Cricket",
    image:
      "https://tis.edu.in/_next/static/media/Cricket.b06b18ca.png",
  },
  {
    name: "Lawn Tennis",
    image:
      "https://tis.edu.in/_next/static/media/lawnTennis.7b3b894a.png",
  },
  {
    name: "Badminton",
    image:
      "https://tis.edu.in/_next/static/media/badminton.a314ff00.png",
  },
  {
    name: "Table Tennis",
    image:
      "https://tis.edu.in/_next/static/media/tableTennis.61f6bd56.png",
  },
]

const Sports = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const sportsPerPage = 8
  const totalPages = Math.ceil(sports.length / sportsPerPage)

  const startIndex = currentPage * sportsPerPage
  const visibleSports = sports.slice(
    startIndex,
    startIndex + sportsPerPage,
  )

  const goToPrevious = () => {
    setCurrentPage((previousPage) =>
      previousPage === 0 ? totalPages - 1 : previousPage - 1,
    )
  }

  const goToNext = () => {
    setCurrentPage((previousPage) =>
      previousPage === totalPages - 1 ? 0 : previousPage + 1,
    )
  }

  return (
    <section className="sports-section">
      <div className="sports-heading">
        <p className="sports-label">Sports ?</p>

        <h2>
          It’s not just a <span>facility</span>. At Tulas it’s the <span>foundation!</span>
        </h2>

        <p className="sports-description">
          16+ sports curated to bring joy and discipline to your life.
        </p>
      </div>

      <div className="sports-grid">
        {visibleSports.map((sport) => (
          <article className="sport-card" key={sport.name}>
            <div className="sport-image-wrapper">
              <img src={sport.image} alt={sport.name} className="sports-image" />
            </div>

            <h3>{sport.name}</h3>
          </article>
        ))}
      </div>

      <div className="sports-controls">
        <button
          type="button"
          className="sports-arrow"
          onClick={goToPrevious}
          aria-label="Previous sports"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>

        <div className="sports-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`sports-dot ${
                currentPage === index ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to sports page ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="sports-arrow"
          onClick={goToNext}
          aria-label="Next sports"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  )
}

export default Sports