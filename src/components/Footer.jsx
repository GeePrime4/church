import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgb(56, 54, 54)", color: "whitesmoke" }} className='pt-2'>
      <div className='mt-3 container-fluid'>
        <div className="row g-0 d-flex justify-content-center">
          <div className="col-sm-12 col-md-5 col-lg-3 mx-3">
            <div className="mb-3">
              <h5 className='fw-bold'>ABOUT THE CHURCH</h5>
              <p ><i>For the word of God is living and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes.</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-3 mx-3">
            <div className="mb-3">
              <h5 className='fw-bold'>OUR ADDRESS</h5>
              <p className='my-0' ><i>Kanku Taiwo, Abaa Alfa, Akobo, Ibadan.</i></p>
              <p className='my-0' ><i>Phone : +234 806 762 6646, +234 816 722 5028</i></p>
              <p className='my-0' ><i>Email : nigbakunlelookie@gmail.com</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-3 mx-3">
            <div className="mb-3">
              <h5 className='fw-bold'>CONNECT</h5>
              <p ><Link to='https://www.facebook.com/share/17uwzRJNgh/' target='_blank'><BsFacebook size={30} className='text-light' /></Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center bg-dark py-2'>Copyright © 2024 All rights reserved</div>
    </div>
  );
};

export default Footer;