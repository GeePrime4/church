import React from 'react';
import Team from "../components/Team";

function About() {
  return (
    <div>
      <div style={{ backgroundColor: "wheat" }}>
        <div className="container py-4">
          <h1 className='fw-bold'>ABOUT US</h1>
          <p>
            <i style={{ fontWeight: "600" }}>
              Welcome to Unchangeable Christ Evangelical Ministry (UCEM), a faith-based organization committed to 
              spreading the transformative message of our Lord Jesus Christ. Our mission is to share the gospel with 
              all, inspiring spiritual growth, and fostering a community of believers who embody the values of love, 
              compassion, and service.
            </i>
          </p>
        </div>
      </div>
      <Team />
    </div>
  );
}

export default About;