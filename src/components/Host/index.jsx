// index.jsx

import React from 'react';

function Host({ name, picture }) {
  const formattedName = name.split(' ').join('\n');

  return (
    <div className='host-container'>
      <h3 className='host-container-name'>{formattedName}</h3>
      <img className='host-container-img' src={picture} alt={name} />
    </div>
  );
}

export default Host;
