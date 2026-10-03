import "./index.css"

const awards = [
  {
    image: "https://tis.edu.in/_next/static/media/TopBoarding.e5405c1a.jpg",
    alt: "Top Boarding School of India Award",
  },
  {
    image:
      "https://tis.edu.in/_next/static/media/BestResidential.5173db8d.jpg",
    alt: "Best Boarding School in Uttarakhand Award",
  },
  {
    image: "https://tis.edu.in/_next/static/media/UTTARAKHAND.652376d5.jpg",
    alt: "Uttarakhand Icon Awards",
  },
]

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="awards-heading">
        <h2>Awards</h2>
        <p>
          We believe in celebrating the hard work and perseverance of the best!
        </p>
      </div>

      <div className="awards-images">
        {awards.map((award) => (
          <div className="award-image" key={award.image}>
            <img src={award.image} alt={award.alt} />
          </div>
        ))}
      </div>

      <div className="awards-action">
        <button type="button">See All Awards</button>
      </div>
    </section>
  )
}

export default Awards