import React, { useState } from 'react';
import arrowUpIcon from '../assets/arrow.png';
import arrowDownIcon from '../assets/arrow.png';

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour changer de slide vers la gauche
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Fonction pour changer de slide vers la droite
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Afficher les flèches seulement s'il y a plus d'une image
  const showArrows = images.length > 1;
  // Afficher la numérotation seulement s'il y a plus d'une image
  const showNumber = images.length > 1;

  return (
    <div className="slideshow">
      {/* Afficher les flèches si showArrows est vrai */}
      {showArrows && <img src={arrowUpIcon} alt="Arrow Up" className="arrow-icon" onClick={prevSlide} />}
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      {showArrows && <img src={arrowDownIcon} alt="Arrow Down" className="arrow-icon" style={{ transform: 'rotate(180deg)' }} onClick={nextSlide} />}
      {/* Afficher la numérotation seulement si showNumber est vrai */}
      {showNumber && <div className="slide-number">{currentSlide + 1} / {images.length}</div>}
    </div>
  );
}

export default Slideshow;
