import React from 'react';
import choir from "../img/banner/choir.jpg";
import ushers from "../img/banner/ushers.jpg";
import children from "../img/banner/children.jpg";

const departments = [
  {
    title: "Choir Department",
    description: "Releasing great sounds of the spirit to worship the father and growing in the spirit",
    image: choir,
  },
  {
    title: "Usher Department",
    description: "Ensuring the efficient seating of the congregation and that the church has an organised atmosphere",
    image: ushers,
  },
  {
    title: "Children Sector",
    description: "Responsible for the care and well-being of the children and also in the spiritual growth of the children",
    image: children,
  },
];

function Departments() {
  return (
    <div className='container-fluid pt-3' style={{ backgroundColor: "whitesmoke" }}>
      <div className="row g-0 d-flex justify-content-center">
        {departments.map((department, index) => (
          <div key={index} className="col-sm-12 col-md-5 col-lg-3 mx-3">
            <div className="card border-0 shadow mb-3">
              <img className="card-img-top img-fluid" src={department.image} alt={department.title} />
              <div className="card-body">
                <h4 className="card-title">{department.title}</h4>
                <p className="card-text"><i>{department.description}</i></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;