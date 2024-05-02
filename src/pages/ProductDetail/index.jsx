import React from 'react';

import { useParams, Navigate } from 'react-router-dom';
import jsonData from './../../data/data.json'; 
import Collapse from '../../components/Collapse';
function ProductDetail() {
  const { id } = useParams();

  // Recherchez le produit correspondant à l'ID dans le fichier JSON
  const product = jsonData.find(item => item.id === id);
  //voir pour transformer en state

  if (!product) {
    return <Navigate to="/404" />;
  }

  // Affichez les détails du produit
  return (
    <div>
      
      <img src={product.cover} alt={product.title} />
      <h2>{product.title}</h2>
      <Collapse title="Description">
      <p>{product.description}</p>
      </Collapse>
      <p>Localisation: {product.location}</p>
      <Collapse title="Equipements">
      <ul>
        {product.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      </Collapse>
      {/* Vous pouvez afficher d'autres détails ici */}
    </div>
  );
}

export default ProductDetail;
