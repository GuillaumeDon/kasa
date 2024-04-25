import React from 'react';
import jsonData from '../data/data.json'

function List () {
  return (
   
      
      <ul className='container-list'>
        {jsonData.map(item => (
          <li className='container-list-item' key={item.id}>
            <h3 className='container-list-item-title'>{item.title}</h3>
            <img className='container-list-item-img' src={item.cover} alt={item.title}  />
          </li>
        ))}
      </ul>
    
  );
};

export default List;
