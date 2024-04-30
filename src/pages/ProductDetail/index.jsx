import React from 'react';

import { useParams, Navigate } from 'react-router-dom';
import jsonData from './../../data/data.json'; 
function ProductDetail() {
  const { id } = useParams();

  // Recherchez le produit correspondant à l'ID dans le fichier JSON
  const product = jsonData.find(item => item.id === id);

  if (!product) {
    return <Navigate to="/404" />;
  }

  // Affichez les détails du produit
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.cover} alt={product.title} />
      <p>{product.description}</p>
      <p>Localisation: {product.location}</p>
      <p>Équipements:</p>
      <ul>
        {product.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      {/* Vous pouvez afficher d'autres détails ici */}
    </div>
  );
}

export default ProductDetail;
