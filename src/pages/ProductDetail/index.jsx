import React from 'react';

import { useParams, Navigate } from 'react-router-dom';
import jsonData from './../../data/data.json'; 
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Host from '../../components/Host';

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
      <h3>Localisation: {product.location}</h3>
      <Tags productId={id}/>
      <Rating rating={product.rating} />
      <Host name={product.host.name} picture={product.host.picture} />
      <Collapse title="Description">
      <p>{product.description}</p>
      </Collapse>
      
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
