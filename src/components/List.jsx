import React from 'react';
import jsonData from '../data/data.json'

function List () {
  return (
   
      
      <section className='container-list'>
        {jsonData.map(item => (
          <article className='container-list-item' key={item.id}>
            <h3 className='container-list-item-title'>{item.title}</h3>
            <img className='container-list-item-img' src={item.cover} alt={item.title}  />
          </article>
        ))}
      </section>
    
  );
};

export default List;
