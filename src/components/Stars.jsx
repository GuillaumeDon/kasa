import React from 'react';

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i}>&#9733;</span>); // étoile pleine
    } else {
      stars.push(<span key={i}>&#9734;</span>); // étoile vide
    }
  }
  return <div>{stars}</div>;
};

export default RatingStars;
