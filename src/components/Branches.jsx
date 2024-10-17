import React from 'react';
import g11 from "../img/gallery/g11.jpg";

function Branches() {
  const branches = [
    {
      title: "UCEM Iware",
      location: "Iware, Ibadan.",
      image: g11,
    },
    {
      title: "UCEM Headquarters",
      location: "Kanku Taiwo, Abaa Alfa, Akobo, Ibadan.",
      image: g11,
    },
    {
      title: "UCEM Onimo",
      location: "Onimo, Ibadan.",
      image: g11,
    },
  ];

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <h4 className='text-center fw-bold p-2 rounded-1 shadow mt-2'>OUR BRANCHES</h4>
      <div className='mt-3 container-fluid'>
        <div className="row g-0 d-flex justify-content-center">
          {branches.map((branch, index) => (
            <div key={index} className="col-sm-12 col-md-5 col-lg-3 mx-3">
              <div className="card border-0 shadow mb-3">
                <img className="card-img-top img-fluid rounded-0" src={branch.image} />
                <div className="card-body py-4">
                  <h4 className="card-title">{branch.title}</h4>
                  <p className="card-text"><i>Location : {branch.location}</i></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Branches;