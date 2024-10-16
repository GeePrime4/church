import React from 'react';
import '../index.css';
import g2 from "../img/gallery/g2.jpg";
import g5 from "../img/gallery/g5.jpg";
import g8 from "../img/gallery/g8.jpg";
import g10 from "../img/gallery/g10.jpg";
import g12 from "../img/gallery/g12.jpg";
import g16 from "../img/gallery/g16.jpg";
import g20 from "../img/gallery/g20.jpg";
import g23 from "../img/gallery/g23.jpg";
import g24 from "../img/gallery/g24.jpg";
import g25 from "../img/gallery/g25.jpg";
import g26 from "../img/gallery/g26.jpg";
import g27 from "../img/gallery/g27.jpg";

const images = [
  { src: g2, alt: "Gallery image" },
  { src: g5, alt: "Gallery image" },
  { src: g8, alt: "Gallery image" },
  { src: g10, alt: "Gallery image" },
  { src: g12, alt: "Gallery image" },
  { src: g16, alt: "Gallery image" },
  { src: g20, alt: "Gallery image" },
  { src: g23, alt: "Gallery image" },
  { src: g24, alt: "Gallery image" },
  { src: g25, alt: "Gallery image" },
  { src: g26, alt: "Gallery image" },
  { src: g27, alt: "Gallery image" },
];

function Gallery() {
  return (
    <div className='pt-3' style={{ backgroundColor: "whitesmoke" }}>
      <h4 className="text-center fw-bold bg-white border p-2 rounded-1 shadow">OUR GALLERY</h4>
      <div className="container-fluid">
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 p-1 zoom">
              <img className="rounded-1 border border-2 border-light img-fluid W-100" src={image.src} alt={image.alt} id='wi' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;