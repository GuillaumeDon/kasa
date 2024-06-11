import React from 'react';
import { Link } from 'react-router-dom';

import jsonData from '../../data/data.json'

function List () {
  return (
   
      <section className='container-list'>
        {jsonData.map(item => (
        <Link to={`/product/${item.id}`} key={item.id} className='container-list-item'>
        <h3 className='container-list-item-title'>{item.title}</h3>
            <img className='container-list-item-img' src={item.cover} alt={item.title}  />
          </Link>
        ))}
      </section>
    
  );
};

export default List;