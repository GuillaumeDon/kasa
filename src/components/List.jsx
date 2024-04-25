import React from 'react';
import jsonData from '../data/data.json'

const List = () => {
  return (
    <div>
      <h2>Liste des Logements</h2>
      <ul>
        {jsonData.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <img src={item.cover} alt={item.title} style={{ width: '200px', height: 'auto' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
