import React from 'react';

import { useParams, Navigate } from 'react-router-dom';
import jsonData from './../../data/data.json'; 
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Rating from '../../components/Rating';
import Host from '../../components/Host';
import Slideshow from '../../components/Slideshow';

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
    <div className='product-container'>
      
      <Slideshow images={product.pictures}/>
      {/* <img src={product.cover} alt={product.title} /> */}
      <h2 className='product-container-title'>{product.title}</h2>
      <h3 className='product-container-location'>{product.location}</h3>
      <Tags productId={id}/>
      <div className='product-container-infos'>
      <Rating rating={product.rating} />
      <Host name={product.host.name} picture={product.host.picture} />
      </div>
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
