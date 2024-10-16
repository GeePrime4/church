import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Pages = () => {
  return (
    <div style={{ backgroundColor: "wheat" }}>
      <h4 className='text-center fw-bold pt-4'>OUR PAGE</h4>
      <div className="container pb-4 d-flex justify-content-between">
        <h6 className='w-75'>
          Follow us on Facebook and keep yourselves updated with the latest news, events, and services of our church. Our Facebook page is the perfect way to stay connected with our church, even when you're on-the-go.
        </h6>
        <button className='btn btn-primary w-25'>
          <Link to="https://www.facebook.com/share/17uwzRJNgh/" target='_blank' style={{ textDecoration: "none" }} className='h6 fw-bold text-light'>
            <BsFacebook size={23} /> Click Here  
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Pages;