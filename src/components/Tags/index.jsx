import React from 'react';
import jsonData from '../../data/data.json';

function Tags({ productId }) {
    // Trouver l'élément correspondant à l'ID du produit
    const product = jsonData.find(item => item.id === productId);

    if (!product) {
        return <div>Produit introuvable</div>;
    }

    return (
        <ul className="tags">
            {product.tags.map(tag => (
                <li className="tags-item" key={tag}>{tag}</li>
            ))}
        </ul>
    );
}

export default Tags;
