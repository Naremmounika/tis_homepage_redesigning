import "./index.css"

const reviews = [
  {
    name: "Tashi Tsering",
    relation: "F/O Jigmet Skaldon",
    image: "https://tis.edu.in/_next/static/media/tashi.3807cb3c.png",
    review:
      "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.",
  },
  {
    name: "Namita Agarwal",
    relation: "M/O Krishna Agarwal",
    image: "https://tis.edu.in/_next/static/media/namita.86a0f799.png",
    review:
      "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.",
  },
  {
    name: "Sandeep Kumar",
    relation: "F/O Aryan",
    image: "https://tis.edu.in/_next/static/media/sandeep.1b22b59e.png",
    review:
      "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.",
  },
  {
    name: "Pinky Sharma",
    relation: "M/O Swastik Sharma",
    image: "https://tis.edu.in/_next/static/media/pinky.8d7145b0.png",
    review:
      "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.",
  },
  {
    name: "Suresh Kumar",
    relation: "F/O Aditya Kumar",
    image: "https://tis.edu.in/_next/static/media/suresh.80d60e49.png",
    review:
      "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.",
  },
  {
    name: "Mrs Urja Bhayani",
    relation: "M/O Shikha & Samarth Bhayani",
    image: "https://tis.edu.in/_next/static/media/urja.03e3c3f3.png",
    review:
      "Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.",
  },
  {
    name: "Amit Agrawal",
    relation: "F/O Samruddhi Agrawal",
    image: "https://tis.edu.in/_next/static/media/amit.c7b6247e.png",
    review:
      "Being a parent it's a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.",
  },
  {
    name: "Ashu Arora",
    relation: "M/O Manisha Changrani",
    image: "https://tis.edu.in/_next/static/media/ashu.9d447126.png",
    review:
      "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.",
  },
  {
    name: "Gulabdas Gupta",
    relation: "F/O Annika Gulabdas Gupta",
    image: "https://tis.edu.in/_next/static/media/gulabdas.63ce81d8.png",
    review:
      "We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.",
  },
  {
    name: "Selendra K. Ajmera",
    relation: "F/O Aman Ajmera",
    image: "https://tis.edu.in/_next/static/media/salendra.42b32ea1.png",
    review:
      "Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.",
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-intro">
        <p className="testimonials-label">From The <span>Parents</span></p>

        <h4>
          Tulas International School has truly exceeded our expectations. The
          focus on holistic development and the encouragement provided by the
          teachers have played a significant role in our child&apos;s growth.
          We are grateful for the personalized attention and the care the
          school offers.
        </h4>
      </div>

      <div className="google-reviews">
        <p className="google-label">Google Reviews</p>

        <div className="reviews-container">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-person">
                <img src={review.image} alt={review.name} />

                <h3>{review.name}</h3>

                <p>{review.relation}</p>
              </div>

              <div className="review-divider" />

              <p className="review-text">{review.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials