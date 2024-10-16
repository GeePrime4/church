import React from 'react';
import "../index.css";

const PROGRAMS_DATA = [
  {
    title: "Sunday Service",
    time: "Sunday 7:00 AM",
  },
  {
    title: "Bible Study",
    time: "Tuesday 5:30 PM",
  },
  {
    title: "Women's Prayer",
    time: "Wednesday 7:00 AM",
  },
  {
    title: "Church Prayer",
    time: "Friday 5:30 PM",
  },
  {
    title: "Choir Rehearsal",
    time: "Saturday 5:00 PM",
  },
];

function Programs() {
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <div className="py-5">
        <h6 className='text-center fw-bold bg-white border p-2 rounded-1 shadow'>PROGRAMS & EVENTS</h6>
        <div className="container">
          <div className="row mt-4 justify-content-center">
            {PROGRAMS_DATA.map((program, index) => (
              <div key={index} className="col-lg-3 col-md-5 mb-2 text-center bg-white py-2 rounded-2 shadow-lg mx-1">
                <h5 className='fw-bold'>{program.title}</h5>
                <p className='fw-bold'><i>{program.time}</i></p>
                <button className="btn btn-warning fw-bold">Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;