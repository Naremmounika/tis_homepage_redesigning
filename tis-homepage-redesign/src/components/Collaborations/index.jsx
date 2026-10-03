import "./index.css"

const collaborations = [
  {
    image:
      "https://tis.edu.in/_next/static/media/Universidad.935e33e1.png",
    alt: "Universidad Autonoma de Chile",
  },
  {
    image:
      "https://tis.edu.in/_next/static/media/yhnbepcntet.3b80eac6.jpg",
    alt: "Synergy University",
  },
  {
    image:
      "https://tis.edu.in/_next/static/media/Universitat.f7fac869.jpg",
    alt: "Universitat d'Andorra",
  },
  {
    image: "https://tis.edu.in/_next/static/media/Cpi6.106c6037.jpg",
    alt: "University Collaboration",
  },
  {
    image: "https://tis.edu.in/_next/static/media/inseec.780a3115.png",
    alt: "INSEEC",
  },
  {
    image: "https://tis.edu.in/_next/static/media/Trinty.31016999.png",
    alt: "Trinity College London",
  },
  {
    image: "https://tis.edu.in/_next/static/media/University.6c89dc70.png",
    alt: "University of the Highlands and Islands",
  },
  {
    image:
      "https://tis.edu.in/_next/static/media/International_Award_for_Young_People_logo.a0d1c4fa.jpg",
    alt: "International Award for Young People",
  },
  {
    image: "https://tis.edu.in/_next/static/media/lions.bf493cc1.png",
    alt: "Lions International",
  },
  {
    image: "https://tis.edu.in/_next/static/media/inseecU.1e5c929a.png",
    alt: "INSEEC U",
  },
  {
    image:
      "https://tis.edu.in/_next/static/media/Universitas.d9db402c.png",
    alt: "Universitas Muhammadiyah Jakarta",
  },
  {
    image:
      "https://tis.edu.in/_next/static/media/universityLogo.6e446aad.jpg",
    alt: "University Collaboration",
  },
]

const Collaborations = () => {
  return (
    <section className="collaborations-section">
      <div className="collaborations-heading">
        <p>12+ Collaborations</p>

       
      </div>

      <div className="collaborations-container">
        {collaborations.map((collaboration) => (
          <div className="collaboration-card" key={collaboration.image}>
            <img
              src={collaboration.image}
              alt={collaboration.alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collaborations