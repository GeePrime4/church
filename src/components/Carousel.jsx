import React from 'react';
import bg2 from "../img/bg2.jpg";
import bg8 from "../img/bg8.jpg";
import bg9 from "../img/bg9.jpg";
import bgalt from "../img/bgalt.jpg";

function Carousel() {
  const images = [
    {
      src: bg2,
      alt: "Los Angeles",
      title: "EXPERIENCE GOD'S WORD EVERYWHERE",
      text: "I will worship toward thy holy temple, and praise thy name for thy lovingkindness and for thy truth: for thou hast magnified thy word above all thy name. Psalms 138:2",
    },
    {
      src: bgalt,
      alt: "Chicago",
      title: "GRACE AND MERCY",
      text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3 :17",
    },
    {
      src: bg9,
      alt: "New York",
      title: "THE WORD AND PRAYER",
      text: "Pray without ceasing. 1st Thessalonians 5 : 17",
    },
    {
      src: bg8,
      alt: "New York",
      title: "THE WORD AND PRAYER",
      text: "Pray without ceasing. 1st Thessalonians 5 : 17",
    },
  ];

  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              style={{ backgroundColor: "black" }}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={image.src} alt={image.alt} className="d-block w-100" style={{ height: "89.4vh" }} />
              <div className="carousel-caption">
                <h3
                  style={{
                    textShadow: "4px 4px 2px black, 0 0 10px gold, 0 0 15px blue",
                  }}
                  className="display-1 fw-bold"
                >
                  {image.title}
                </h3>
                <p
                  style={{
                    textShadow: "2px 2px black, 0 0 5px gold, 0 0 8px blue",
                  }}
                  className="display-6"
                >
                  <i>{image.text}</i>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;