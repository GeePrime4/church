import React from 'react';
import mrRaji from "../img/gallery/mrRaji.jpg";
import pastee from "../img/gallery/pastee.jpg";
import "../index.css";

const TEAM_MEMBERS = [
  {
    name: "Pastor Olutunde Aremu",
    title: "Founder and Pastor Of The Church",
    image: pastee,
    description: `Meet Pastor Olutunde Aremu, the esteemed Founder and Pastor of our Church. With a deep
      commitment to spiritual leadership and community service, Pastor Aremu has dedicated his life to guiding the
      congregation in faith, fostering a welcoming environment for worship, and inspiring individuals to grow in
      their relationship with God. Under his leadership, the Church has flourished, reaching out to the community
      with love and the message of hope.`,
  },
  {
    name: "Pastor Abiodun Raji",
    title: "Youth Pastor Of The Church",
    image: mrRaji,
    description: `Introducing Pastor Abiodun Raji, the dedicated Youth Pastor of our Church. With a passion for nurturing the spiritual growth of young people, Pastor Raji 
      plays a vital role in guiding the youth towards a deeper understanding of their faith. He organizes
      engaging programs and activities that inspire and empower the younger generation, fostering a sense 
      of community and purpose. Through his leadership, Pastor Raji encourages the youth to embrace their 
      faith and become active participants in the life of the Church, instilling values of love, integrity, 
      and service.`,
  },
];

function Team() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }} className='py-3'>
      <h4 className="text-center fw-bold">OUR TEAM</h4>
      <div className='mt-3 container'>
        {TEAM_MEMBERS.map((member, index) => (
          <div key={index} className="card border-0 shadow mb-3">
            <img className="card-img-top img-fluid rounded-0" src={member.image} alt={`Image of ${member.name}`} />
            <div className="card-body py-4">
              <h5 className="card-title fw-bold">{member.title}, {member.name}</h5>
              <p className="card-text" style={{ fontWeight: "500" }}>
                <i>{member.description}</i>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;