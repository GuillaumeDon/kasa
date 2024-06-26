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

 
  const product = jsonData.find(item => item.id === id);



  if (!product) {
    return <Navigate to="/404" />;
  }


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
      <div className='product-container-collapse'>
        
          <Collapse title="Description" className="custom-collapse-produce">
            <p>{product.description}</p>
          </Collapse>
        
        
          <Collapse title="Equipements"  className="custom-collapse-produce">
            <ul>
              {product.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        
      </div>
    </div>
  );
}

export default ProductDetail;
