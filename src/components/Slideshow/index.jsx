import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../../components/Arrows';

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const showArrows = images.length > 1;
  const showNumber = images.length > 1;

  return (
    <div className="slideshow-container">
      {showArrows && <div onClick={prevSlide}><ArrowRightIcon /></div>}
      <img className="slideshow-container-img" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      {showArrows && <div onClick={nextSlide}><ArrowLeftIcon /></div>}
      {showNumber && <div className="slideshow-container-number">{currentSlide + 1} / {images.length}</div>}
    </div>
  );
}

export default Slideshow;
