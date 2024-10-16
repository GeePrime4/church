import React from 'react';
import { BsChatLeftQuote, BsChatRightQuote } from 'react-icons/bs';

function BibleVerses() {
  return (
    <div style={{ backgroundColor: "wheat" }} className='mt-4'>
      <h4 className='text-center fw-bold rounded-1 pt-3'>Bible Verses</h4>
      <div className='d-flex justify-content-between container'>
        <div id="demo1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active" style={{ backgroundColor: "black" }}></button>
            <button type="button" data-bs-target="#demo1" data-bs-slide-to="1" style={{ backgroundColor: "black" }}></button>
            <button type="button" data-bs-target="#demo1" data-bs-slide-to="2" style={{ backgroundColor: "black" }}></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <BsChatLeftQuote size={32} />
              <p className="text-center w-75 mx-auto" style={{ fontFamily: "cursive", fontSize: "20px" }}>Remember me, O Lord, with the favour that thou bearest unto thy people: O visit me with thy salvation; Psalms chp 106 : 4</p>
              <div className="d-flex justify-content-end"><BsChatRightQuote size={32} className='mt-3' /></div>
            </div>
            <div className="carousel-item">
              <BsChatLeftQuote size={32} />
              <p className="text-center w-75 mx-auto" style={{ fontFamily: "cursive", fontSize: "20px" }}>Ye are my witnesses, saith the Lord, and my servant whom I have chosen: that ye may know and believe me, and understand that I am he: before me there was no God formed, neither shall there be after me. Isaiah chp 43 : 10</p>
              <div className="d-flex justify-content-end"><BsChatRightQuote size={32} className='mt-3' /></div>
            </div>
            <div className="carousel-item">
              <BsChatLeftQuote size={32} />
              <p className="text-center w-75 mx-auto" style={{ fontFamily: "cursive", fontSize: "20px" }}>My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me.2nd Corinthians chp 12 : 9</p>
              <div className="d-flex justify-content-end"><BsChatRightQuote size={32} className='mt-3' /></div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BibleVerses;