import React from 'react';

function Rating({ rating }) {
  // Convertir le rating en un nombre entier
  const numStars = parseInt(rating); //mettre ca comme state

  // Créer un tableau avec le nombre d'étoiles correspondant au rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      stars.push(<span className='stars'key={i}>&#9733;</span>); // Étoile pleine
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Étoile vide
    }
  }

  return <div>{stars}</div>;
}

export default Rating;
