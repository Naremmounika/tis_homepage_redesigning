import "./index.css"

const leaders = [
  {
    name: "Shri Dhan Singh Rawat Ji",
    image:
      "https://tis.edu.in/_next/static/media/DhanSinghRawat.f504bd14.webp",
    description: "Minister of Higher Education, Uttarakhand",
  },
  {
    name: "Shri Trivendra Singh Rawat Ji",
    image:
      "https://tis.edu.in/_next/static/media/TrivendraSinghRawat.c2e8d88b.webp",
    description:
      "Member of Parliament & Former Chief Minister, Uttarakhand",
  },
  {
    name: "Shri Subodh Uniyal Ji",
    image:
      "https://tis.edu.in/_next/static/media/SubodhUniyal.25533860.webp",
    description: "Technical Education and Forest Minister, Uttarakhand.",
  },
  {
    name: "Dr Ramesh Pokhriyal Nishank Ji",
    image:
      "https://tis.edu.in/_next/static/media/RameshPokhriyalNishank.5f11fd77.webp",
    description:
      "Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand",
  },
  {
    name: "Shri Bhagat Singh Koshyari Ji",
    image:
      "https://tis.edu.in/_next/static/media/BhagatSinghKoshyari.f996a329.webp",
    description:
      "Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand",
  },
  {
    name: "Shri Dharmendra Pradhan Ji",
    image:
      "https://tis.edu.in/_next/static/media/DharmendraPradhan.cae1e9ae.webp",
    description: "Union Minister of Education for India.",
  },
  {
    name: "Shri Anurag Tripathi Ji",
    image:
      "https://tis.edu.in/_next/static/media/AnuragTripathi.a8e203b4.webp",
    description: "CBSE Secretary Uttarakhand",
  },
  {
    name: "Shri Arvind Pandey Ji",
    image:
      "https://tis.edu.in/_next/static/media/ArvindPandey.3f959220.webp",
    description: "MLA, Former Education Minister",
  },
  {
    name: "Shri Namami Bansal Ji",
    image:
      "https://tis.edu.in/_next/static/media/NamamiBansal.97f4f1f0.webp",
    description: "I.A.S Municipal Commissioner Uttarakhand",
  },
  {
    name: "Shri Abhinav Kumar Ji",
    image:
      "https://tis.edu.in/_next/static/media/AbhinavKumar.8cbdb15a.webp",
    description: "ADG and former DGP of Uttarakhand Police",
  },
  {
    name: "Shri Janmejaya Khanduri Ji",
    image:
      "https://tis.edu.in/_next/static/media/JanmejayaKhanduri.18ae0527.webp",
    description: "IG Dehradun - Government of India",
  },
  {
    name: "Shri Ashok Kumar Ji",
    image:
      "https://tis.edu.in/_next/static/media/AshokKumar.b9a984fa.webp",
    description: "Former DGP, Uttarakhand",
  },
  {
    name: "Shri Amit Kumar Sinha Ji",
    image:
      "https://tis.edu.in/_next/static/media/AmitKumarSinha.5e245cdc.webp",
    description: "ADG, Principal Secretary Sports, Uttarakhand",
  },
  {
    name: "Shri Sunil Uniyal Gama Ji",
    image:
      "https://tis.edu.in/_next/static/media/SunilUniyalGama.55361603.webp",
    description: "Former Mayor Municipal Corporation, Dehradun.",
  },
  {
    name: "Shri Sahdev Singh Pundir Ji",
    image:
      "https://tis.edu.in/_next/static/media/SahdevSinghPundir.7aa9859f.webp",
    description: "MLA Sahaspur, Uttarakhand",
  },
]

const personalities = [
  {
    name: "Sakshi Malik",
    image: "https://tis.edu.in/_next/static/media/SakshiMalik.91174bf4.webp",
    description:
      "First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014 Commonwealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017",
  },
  {
    name: "Vishesh Bhriguvanshi",
    image:
      "https://tis.edu.in/_next/static/media/VisheshBhriguvanshi.52af8bfd.webp",
    description:
      "Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008",
  },
  {
    name: "Prakashi Tomar & Late Ms Chandro Tomar",
    image: "https://tis.edu.in/_next/static/media/PrakashiTomar.339dbb95.webp",
    description:
      "Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner",
  },
  {
    name: "Abhishek Verma",
    image: "https://tis.edu.in/_next/static/media/AbhishekVerma.18f9d349.webp",
    description:
      "6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013",
  },
  {
    name: "Aditi Gopichand Swami",
    image:
      "https://tis.edu.in/_next/static/media/AditiGopichandSwami.b7afa246.webp",
    description:
      "7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024",
  },
  {
    name: "Jeevan Jyot Singh Teja",
    image:
      "https://tis.edu.in/_next/static/media/JeevanJyotSinghTeja.9a07711c.webp",
    description: "Dronacharya Awardee in Archery 2022",
  },
  {
    name: "Ojus Devtale",
    image:
      "https://tis.edu.in/_next/static/media/OjasPravinDeotale.1d2e01cc.webp",
    description:
      "9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery",
  },
  {
    name: "Rajat Chauhan",
    image: "https://tis.edu.in/_next/static/media/RajatChauhan.bcb1fbf2.webp",
    description:
      "5th Highest World Ranking Arjuna Awardee 2016 in Archery",
  },
  {
    name: "Devendra Singh Bisht",
    image:
      "https://tis.edu.in/_next/static/media/DevendraSinghBisht.09635f71.webp",
    description: "Under 18 School Indian Football Team Selector",
  },
  {
    name: "Manish Metani",
    image: "https://tis.edu.in/_next/static/media/ManishMetani.ca55bf71.webp",
    description: "Indian Football Player",
  },
  {
    name: "Saurabh Joshi",
    image: "https://tis.edu.in/_next/static/media/SaurabhJoshi.450ff5df.webp",
    description: "Influencer with 30 Million Subscribers on Youtube",
  },
  {
    name: "Arushi Nishank",
    image: "https://tis.edu.in/_next/static/media/ArushiNishank.f3341404.webp",
    description:
      "Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga",
  },
  {
    name: "Laxmi Agarwal",
    image:
      "https://tis.edu.in/_next/static/media/LakshmiAgarwal.7405df5d.webp",
    description:
      "International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims",
  },
]

const Media = () => {
  return (
    <section className="media-section">
      <div className="media-heading">
        <h2>Influential Personalities On Campus</h2>
      </div>

      <div className="media-category">
        Sports Person /Social Media Influencers
      </div>

      <div className="personality-scroll">
        {personalities.map((personality) => (
          <article className="personality-card" key={personality.name}>
            <div className="personality-image">
              <img
                src={personality.image}
                alt={personality.name}
              />
            </div>

            <div className="personality-content">
              <h3>{personality.name}</h3>
              <p>{personality.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="media-category leaders-category">
        Leaders of India
      </div>

      <div className="personality-scroll">
        {leaders.map((leader) => (
          <article className="personality-card" key={leader.name}>
            <div className="personality-image">
              <img src={leader.image} alt={leader.name} />
            </div>

            <div className="personality-content">
              <h3>{leader.name}</h3>
              <p>{leader.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Media