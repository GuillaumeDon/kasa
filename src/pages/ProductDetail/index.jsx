import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from './../../data/data.json'; // Assurez-vous de remplacer 'votre-fichier-json.json' par le chemin correct vers votre fichier JSON

function ProductDetail() {
  const { id } = useParams();

  // Recherchez le produit correspondant à l'ID dans le fichier JSON
  const product = jsonData.find(item => item.id === id);

  // Vérifiez si le produit existe
  if (!product) {
    return <div>Produit non trouvé</div>;
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
