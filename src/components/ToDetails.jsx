import React from 'react'
import { Link } from 'react-router-dom'

function ToDetails() {
  return (
    <div  className="row g-0" style={{ backgroundColor: "wheat" }}>
      <div className='py-4 container'>
        <div className="container d-flex justify-content-between">
          <p className=''><strong>UPCOMING EVENT : <span className='h6 fw-bold'>"CHRISTMAS CAROL"</span></strong></p> <br />
          <button className='btn btn-outline-light text-dark fw-bold border-2 border-dark col-md-2' style={{marginTop:"-7px"}}><Link style={{ textDecoration: "none", color: "black" }}>PROGRAM DETAILS</Link></button>
        </div>
      </div>
    </div>
  )
}

export default ToDetails
