import React, { useState, useEffect} from "react";
import "./slider.css"

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://trapthedeal.dousoftit.com/uploads/slider/Android%20Smart%20TV.jpg",
    "https://trapthedeal.dousoftit.com/uploads/slider/Small%20Appliances.jpg",
    "https://trapthedeal.dousoftit.com/uploads/slider/Big%20Appliances.jpg",
    
  ];

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);


  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          className={`slide ${currentSlide === index ? "active" : ""}`}
          key={index}
        >
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
      <div className="slider-arrows">
        <button
          className="slider-arrow"
          onClick={() =>
            handleClick(
              currentSlide === 0 ? images.length - 1 : currentSlide - 1
            )
          }
        >
          &lt;
        </button>
        <button
          className="slider-arrow"
          onClick={() =>
            handleClick(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
